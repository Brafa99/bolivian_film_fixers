import "./HeroSection.css";
import heroVideo from "../../assets/videos/boliviafilm.mp4";
import useLanguage from "../../hooks/useLanguage";
import { useEffect, useRef, useState } from "react";
import heroAudio from "../../assets/audio/audio2.mp3";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
function HeroSection() {

    const { t } = useLanguage();
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false)


    useEffect(() => {

    const pauseAudio = () => {

        if (!audioRef.current) return;

        audioRef.current.pause();

        setIsPlaying(false);

        console.log("Audio pausado (YouTube)");

    };

    window.addEventListener("pauseHeroAudio", pauseAudio);

    return () => {

        window.removeEventListener("pauseHeroAudio", pauseAudio);

    };

}, []);


   useEffect(() => {

    const removeListeners = () => {

        document.removeEventListener("click", startAudio);
        document.removeEventListener("pointerdown", startAudio);
        document.removeEventListener("touchstart", startAudio);
        document.removeEventListener("keydown", startAudio);

        window.removeEventListener("scroll", startAudio);
        window.removeEventListener("wheel", startAudio);
        window.removeEventListener("mousewheel", startAudio);
        window.removeEventListener("touchmove", startAudio);

    };

    const startAudio = async (event) => {

        const audio = audioRef.current;

        if (!audio) return;

        // Ya está reproduciendo
        if (!audio.paused) return;

        console.log("Interacción:", event.type);

        try {

            audio.volume = 0.35;

            await audio.play();

            setIsPlaying(true);

            console.log("Audio iniciado correctamente");

            removeListeners();

        } catch (err) {

            console.log("Autoplay bloqueado");
            console.log(err.name);
            console.log(err.message);

        }

    };

    // Desktop
    document.addEventListener("click", startAudio);
    document.addEventListener("pointerdown", startAudio);
    document.addEventListener("keydown", startAudio);

    // Mobile
    document.addEventListener("touchstart", startAudio, {
        passive: true
    });

    document.addEventListener("touchmove", startAudio, {
        passive: true
    });

    // Scroll
    window.addEventListener("scroll", startAudio, {
        passive: true
    });

    window.addEventListener("wheel", startAudio, {
        passive: true
    });

    window.addEventListener("mousewheel", startAudio, {
        passive: true
    });

    return () => {

        removeListeners();

    };

}, []);


const toggleAudio = () => {

    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {

        audio.play()
    .then(() => {

        setIsPlaying(true);

    })
    .catch((err) => {

        console.log(err);

    });

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
    muted={false}
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