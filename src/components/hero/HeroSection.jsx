import "./HeroSection.css";

import heroVideo from "../../assets/videos/boliviafilm.mp4";

import useLanguage from "../../hooks/useLanguage";

function HeroSection() {

    const { t } = useLanguage();

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