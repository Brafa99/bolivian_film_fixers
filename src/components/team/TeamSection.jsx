import "./TeamSection.css";

import useLanguage from "../../hooks/useLanguage";

import backgroundImage from "../../assets/images/placeholders/1920x1200-0.jpg";

import yayaImage from "../../assets/images/team/yaya.jpeg";
import jaimeImage from "../../assets/images/team/jaime.jpeg";

function TeamSection() {

    const { t } = useLanguage();
  

    return (

        <section id="team" className="team">

            <div
                className="team-header"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            >

                <div className="team-header-overlay"></div>

                <div className="container team-header-content">

                    <span>

                        {t.team.subtitle}

                    </span>

                    <h2>

                        {t.team.title}

                    </h2>

                    <p>

                        {t.team.description}

                    </p>

                </div>

            </div>

            <div className="team-member reverse2">

                <div className="team-image">

                    <img
                        src={yayaImage}
                        alt="Hidaya (Yaya)"
                    />

                    <div className="team-image-overlay">

                        <h3>Hidaya (Yaya)</h3>

                        <span className="team-role">
                            {t.contact.yayaRole}

</span>

                    </div>

                </div>

                <div className="team-content">

                    <p className="team-highlight">

                        {t.team.yayaHighlight}

                    </p>

                    <p>

                        {t.team.yayaDescription}

                    </p>

                </div>

            </div>

            <div className="team-member reverse">

                <div className="team-content">

                    <p className="team-highlight">

                        {t.team.jaimeHighlight}

                    </p>

                    <p>

                        {t.team.jaimeDescription}

                    </p>

                </div>

                <div className="team-image">

                    <img
                        src={jaimeImage}
                        alt="Jaime (James)"
                    />

                    <div className="team-image-overlay">

                        <h3>Jaime (James)</h3>

                        <span className="team-role">
                            {t.contact.jaimeRole}

</span>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default TeamSection;