import "./Footer.css";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaVimeoV,
    FaLinkedinIn
} from "react-icons/fa";

import logo from "../../assets/images/logobf.png";

import contact from "../../data/contact";

import useLanguage from "../../hooks/useLanguage";

function Footer() {

    const { t } = useLanguage();

    const year = new Date().getFullYear();

    return (

        <footer className="footer">

            <div className="footer-overlay"></div>

            <div className="container footer-container">

                <div className="footer-brand">

                    <img
                        src={logo}
                        alt="Bolivian Film Fixers"
                    />

                    {/* <p>

                        More than a production service.
                        <br />
                        A friendship.

                    </p> */}

                </div>

                <div className="footer-social">

                    <a
                        href={contact.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href={contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href={contact.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                    >
                        <FaYoutube />
                    </a>

                    {/* <a
                        href={contact.vimeo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Vimeo"
                    >
                        <FaVimeoV />
                    </a>

                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a> */}

                </div>

                <nav className="footer-links">

                    <a href="#home">{t.navbar.home}</a>

                    <a href="#work">{t.navbar.work}</a>

                    <a href="#about">{t.navbar.about}</a>

                    <a href="#team">{t.navbar.team}</a>

                    <a href="#contact">{t.navbar.contact}</a>

                </nav>

            </div>

            <div className="footer-bottom">

                © {year} Bolivian Film Fixers. All Rights Reserved.

            </div>

            <div className="footer-signature">

    <span className="signature-powered">
        Powered by
    </span>

    <div className="signature-brand">

        <span className="signature-name">
            BrafaCorp
        </span>

        <span className="signature-subtitle">
            Digital Solutions
        </span>

    </div>

</div>

        </footer>

    );

}

export default Footer;