import "./ContactCard.css";

import useLanguage from "../../hooks/useLanguage";
import contact from "../../data/contact";

function ContactCard() {

    const { t } = useLanguage();

    return (

        <aside className="contact-card">

            <span className="contact-label">

                {t.contact.label}

            </span>

            <h2>

                {t.contact.cardTitle}

            </h2>

            <p className="contact-intro">

                {t.contact.cardDescription}

            </p>

            {/* =========================
                Hidaya
            ========================= */}

            <div className="person">

                <div className="person-header">

                    <h3>

                        Hidaya (Yaya)

                    </h3>

                    <span className="person-role">

                        {t.contact.yayaRole}

                    </span>

                </div>

                <a
                    href={`mailto:${contact.yaya.email}`}
                    className="contact-link"
                >

                    📧 {contact.yaya.email}

                </a>

                <a
    href={`https://wa.me/${contact.yaya.whatsapp}?text=${encodeURIComponent(
        "Hello! I visited the Bolivian Film Fixers website and I'd like to get more information about your production services in Bolivia."
    )}`}
    target="_blank"
    rel="noreferrer"
    className="whatsapp-link"
>
    {contact.yaya.phone}
</a>

            </div>

            {/* =========================
                Jaime
            ========================= */}

            <div className="person">

                <div className="person-header">

                    <h3>

                        Jaime (James)

                    </h3>

                    <span className="person-role">

                        {t.contact.jaimeRole}

                    </span>

                </div>

                <a

//PARA CAMBIAR IDIOMA

// href={`https://wa.me/${contact.yaya.whatsapp}?text=${encodeURIComponent(
//     t.contact.whatsappMessage
// )}`}

                    href={`mailto:${contact.jaime.email}`}
                    className="contact-link"


                >

                    📧 {contact.jaime.email}

                </a>

                <a
    href={`https://wa.me/${contact.jaime.whatsapp}?text=${encodeURIComponent(
        "Hello! I visited the Bolivian Film Fixers website and I'd like to get more information about your production services in Bolivia."
    )}`}
    target="_blank"
    rel="noreferrer"
    className="whatsapp-link"
>
    {contact.jaime.phone}
</a>

            </div>

            {/* <div className="socials">

                <a
                    href={contact.facebook}
                    target="_blank"
                    rel="noreferrer"
                >

                    {t.contact.facebook}

                </a>

                <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noreferrer"
                >

                    {t.contact.instagram}

                </a>

                <a
                    href={contact.youtube}
                    target="_blank"
                    rel="noreferrer"
                >

                    {t.contact.youtube}

                </a>

            </div> */}

        </aside>

    );

}

export default ContactCard;