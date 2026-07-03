import "./ContactSection.css";

import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

import useLanguage from "../../hooks/useLanguage";

import backgroundImage from "../../assets/images/placeholders/1920x1200-0.jpg";

function ContactSection() {

    const { t } = useLanguage();

    return (

        <section
            id="contact"
            className="contact"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >

            <div className="contact-overlay"></div>

            <div className="container contact-container">

                <div className="section-title">

                    <span>

                        {t.contact.subtitle}

                    </span>

                    <h2>

                        {t.contact.title}

                    </h2>

                    {

                        t.contact.description && (

                            <p className="section-description">

                                {t.contact.description}

                            </p>

                        )

                    }

                </div>

                <div className="contact-grid">

                    <ContactCard />

                    <ContactForm />

                </div>

            </div>

        </section>

    );

}

export default ContactSection;