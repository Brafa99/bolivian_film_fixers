import "./Navbar.css";

import { useState } from "react";

import logo from "../../assets/images/logobf.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import useLanguage from "../../hooks/useLanguage";

function Navbar() {

    const { t, language, changeLanguage } = useLanguage();

    const [menuOpen, setMenuOpen] = useState(false);

    const links = [

        {
            label: t.navbar.home,
            href: "#home",
        },

        {
            label: t.navbar.work,
            href: "#work",
        },

        {
            label: t.navbar.about,
            href: "#about",
        },

        {
            label: t.navbar.team,
            href: "#team",
        },

        {
            label: t.navbar.contact,
            href: "#contact",
        },

    ];

    const closeMenu = () => {

        setMenuOpen(false);

    };

    return (

        <header className="navbar">

            <div className="navbar-container">

                <a
                    href="#home"
                    className="navbar-logo"
                    onClick={closeMenu}
                >

                    <img
                        src={logo}
                        alt="Bolivian Film Fixers"
                    />

                </a>

                <button
    className="menu-button"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation"
>
    {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
</button>

                <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>

                    <ul className="navbar-links">

                        {

                            links.map((link) => (

                                <li key={link.href}>

                                    <a
                                        href={link.href}
                                        onClick={closeMenu}
                                    >

                                        {link.label}

                                    </a>

                                </li>

                            ))

                        }

                    </ul>

                    <div className="language-selector">

                        <button
                            className={language === "en" ? "active" : ""}
                            onClick={() => {

                                changeLanguage("en");

                                closeMenu();

                            }}
                        >

                            🇺🇸 EN

                        </button>

                        <button
                            className={language === "es" ? "active" : ""}
                            onClick={() => {

                                changeLanguage("es");

                                closeMenu();

                            }}
                        >

                            🇪🇸 ES

                        </button>

                    </div>

                </nav>

            </div>

        </header>

    );

}

export default Navbar;