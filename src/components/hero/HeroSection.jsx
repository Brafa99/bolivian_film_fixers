import "./HeroSection.css";
import heroVideo from "../../assets/videos/boliviafilm.mp4";
import useLanguage from "../../hooks/useLanguage";
import { useEffect, useRef, useState } from "react";
import heroAudio from "../../assets/audio/audio2.mp3";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
function HeroSection() {

    const { t } = useLanguage();
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);


    useEffect(() => {

    const pauseAudio = () => {

    if (!audioRef.current) return;

    audioRef.current.pause();

    setIsPlaying(false);

    window.removeEventListener("click", startAudio);
    window.removeEventListener("scroll", startAudio);

};

    window.addEventListener("pauseHeroAudio", pauseAudio);

    return () => {

        window.removeEventListener("pauseHeroAudio", pauseAudio);

    };

}, []);

    useEffect(() => {

    const startAudio = () => {

        audioRef.current?.play()
            .then(() => {

                setIsPlaying(true);

            })
            .catch(() => {});

        window.removeEventListener("click", startAudio);
        window.removeEventListener("scroll", startAudio);

    };

    window.addEventListener("click", startAudio);

    window.addEventListener("scroll", startAudio);

    return () => {

        window.removeEventListener("click", startAudio);
        window.removeEventListener("scroll", startAudio);

    };

}, []);

const toggleAudio = () => {

    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {

        audio.play();

        setIsPlaying(true);

    } else {

        audio.pause();

        setIsPlaying(false);

    }

};

    return (

        <section
            id="home"
            className="hero"
        >

            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
            >

                <source
                    src={heroVideo}
                    type="video/mp4"
                />

                Your browser does not support HTML5 video.

            </video>

            <audio
    ref={audioRef}
    preload="auto"
    playsInline
>

    <source
        src={heroAudio}
        type="audio/mpeg"
    />

</audio>
<button
    className="hero-audio-button"
    onClick={toggleAudio}
>

    {

        isPlaying

            ? <FaVolumeUp />

            : <FaVolumeMute />

    }

</button>
            <div className="hero-overlay"></div>

            <div className="hero-content">

                <span className="hero-badge">

                    {t.hero.badge}

                </span>

                <h1>

                    {t.hero.title1}

                    <span>

                        {t.hero.title2}

                    </span>

                </h1>

                <p>

                    {t.hero.description}

                </p>

             
                <a
                    href="#work"
                    className="hero-button"
                    aria-label="View our projects"
                >

                    {t.hero.button}

                </a>

            </div>

            <a
                href="#work"
                className="scroll-indicator"
                aria-label="Scroll to work section"
            >

                ↓

            </a>

        </section>

    );

}

export default HeroSection;