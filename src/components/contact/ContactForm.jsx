import "./ContactForm.css";

import { useState } from "react";

import useLanguage from "../../hooks/useLanguage";
import contact from "../../data/contact";

function ContactForm() {

    const { t } = useLanguage();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        name: "",
        email: "",
        message: ""

    });

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    function handleSubmit(e) {

        e.preventDefault();

        setLoading(true);

        const text = `
${t.contact.whatsappMessage}

👤 ${t.contact.formName}: ${form.name}

📧 ${t.contact.formEmail}: ${form.email}

📝 ${t.contact.formMessage}

${form.message}
`;

        const url = `https://wa.me/${contact.yaya.whatsapp}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

        setForm({

            name: "",
            email: "",
            message: ""

        });

        setLoading(false);

    }

    return (

        <div className="contact-form-wrapper">

            <div className="form-header">

                <span>

                    {t.contact.formSubtitle}

                </span>

                <h3>

                    {t.contact.formTitle}

                </h3>

                <p>

                    {t.contact.formDescription}

                </p>

            </div>

            {/*
            ===================================
            CONTACT FORM
            Comment this block if you prefer
            WhatsApp-only contact in the future.
            ===================================
            */}

            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >

                <div className="row">

                    <input

                        name="name"

                        placeholder={t.contact.formName}

                        value={form.name}

                        onChange={handleChange}

                        required

                    />

                    <input

                        type="email"

                        name="email"

                        placeholder={t.contact.formEmail}

                        value={form.email}

                        onChange={handleChange}

                        required

                    />

                </div>

                <textarea

                    rows="8"

                    name="message"

                    placeholder={t.contact.formMessage}

                    value={form.message}

                    onChange={handleChange}

                    required

                />

                <button
className="contact-form button"
                    type="submit"

                    disabled={loading}

                >

                    {loading ? t.contact.sending : t.contact.send}

                </button>

            </form>

        </div>

    );

}

export default ContactForm;