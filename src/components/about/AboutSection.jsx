import "./AboutSection.css";
import useLanguage from "../../hooks/useLanguage";

import backgroundImage from "../../assets/images/placeholders/1920x1200-0.jpg";

function AboutSection() {

    const { t } = useLanguage();

    return (

        <section
            id="about"
            className="about"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >

            <div className="about-overlay"></div>

            <div className="container about-container">

                <div className="about-column">

                    {/* <span>

                        {t.about.subtitle}

                    </span> */}

                    <h2>

                        {t.about.title}

                    </h2>

                    <p>

                        {t.about.description}

                    </p>

                </div>

                <div className="about-column">

                    {/* <span>

                        {t.bolivia.subtitle}

                    </span> */}

                    <h2>

                        {t.bolivia.title}

                    </h2>

                    <p>

                        {t.bolivia.description}

                    </p>

                </div>

            </div>

        </section>

    );

}

export default AboutSection;