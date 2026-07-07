import fs from "fs";
import projects from "../src/data/projects.js";
import metadata from "../src/data/metadata.js";

const merged = projects.map((project) => {

    const meta = metadata[project.youtubeId];

    if (!meta) {

        console.warn(`⚠ No metadata para ${project.title}`);

        return project;

    }

    return {

        ...project,

        category: meta.category,
        client: meta.client,
        country: meta.country,

    };

});

fs.writeFileSync(

    "./src/data/projects.js",

    `export default ${JSON.stringify(merged, null, 2)};`
);
console.log(`✔ ${merged.length} proyectos actualizados`);