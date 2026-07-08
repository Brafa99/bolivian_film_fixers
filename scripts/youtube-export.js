import { google } from "googleapis";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

console.log("API:", process.env.YOUTUBE_API_KEY);
console.log("CHANNEL:", process.env.CHANNEL_HANDLE);

const youtube = google.youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API_KEY,
});


const EXTRA_VIDEO_URLS = [

    "https://youtu.be/OmXsSfiIJHI",

    "https://youtu.be/A7ZFN7X5lZU",

    "https://youtu.be/VaVDEibbbvM",

    "https://www.youtube.com/watch?v=hZH-5kI3reM",

    "https://www.youtube.com/watch?v=14rnnr3-kLU",

    "https://youtu.be/gX4V__oG-wk",

    "https://youtu.be/LawnxU8OUNs?si=ZWFNBfUFzUYgtTSi",

    "https://youtu.be/HW9BGbBW75A",

];


function extractVideoId(url) {

    const short = url.match(/youtu\.be\/([^?]+)/);

    if (short) return short[1];

    const normal = url.match(/[?&]v=([^&]+)/);

    if (normal) return normal[1];

    return null;

}

async function getExtraVideos() {

    const ids = EXTRA_VIDEO_URLS
        .map(extractVideoId)
        .filter(Boolean);

    if (!ids.length) return [];

    const response = await youtube.videos.list({

        part: [

            "snippet",
            "contentDetails",
            "statistics"

        ],

        id: ids

    });

    return response.data.items;

}

function formatDuration(duration) {

    const match = duration.match(
        /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/
    );

    const hours = Number(match?.[1] || 0);
    const minutes = Number(match?.[2] || 0);
    const seconds = Number(match?.[3] || 0);

    if (hours > 0) {
        return `${hours}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
    }

    return `${minutes}:${String(seconds).padStart(2,"0")}`;
}

async function getUploadsPlaylist() {

    const response = await youtube.channels.list({

        part: ["contentDetails"],

        forHandle: process.env.CHANNEL_HANDLE

    });

    if (!response.data.items.length) {

        throw new Error("Canal no encontrado");

    }

    return response.data.items[0]
        .contentDetails
        .relatedPlaylists
        .uploads;
}

async function exportVideos() {

    const uploads = await getUploadsPlaylist();

    const playlist = await youtube.playlistItems.list({

        part: ["snippet"],

        playlistId: uploads,

        maxResults: 50,

    });

    const ids = playlist.data.items.map(

        item => item.snippet.resourceId.videoId

    );

    const channelVideos = await youtube.videos.list({

    part: [

        "snippet",
        "contentDetails",
        "statistics"

    ],

    id: ids

});

const extraVideos = await getExtraVideos();

const allVideos = [

    ...channelVideos.data.items,

    ...extraVideos

];

    const projects = allVideos.map((video, index) => ({

    id: index + 1,

    title: video.snippet.title,

    description: video.snippet.description,

    category: "",

    client: "",

    country: "",

    youtubeId: video.id,

    youtubeUrl: `https://youtu.be/${video.id}`,

    thumbnail:
        video.snippet.thumbnails.maxres?.url ||
        video.snippet.thumbnails.high?.url,

    publishedAt: video.snippet.publishedAt,

    duration: formatDuration(
        video.contentDetails.duration
    ),

    views: Number(
        video.statistics.viewCount
    )

}));

    fs.writeFileSync(

        "./src/data/projects.js",

        `export default ${JSON.stringify(projects,null,2)};`

    );

    console.log(
        `✔ ${projects.length} videos exportados`
    );

}

exportVideos();