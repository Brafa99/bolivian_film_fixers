import "./ContactForm.css";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import useLanguage from "../../hooks/useLanguage";
import contact from "../../data/contact";

function ContactForm() {

    const { t } = useLanguage();

    const [loading, setLoading] = useState(false);

const [success, setSuccess] = useState("");

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

    async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);

    setSuccess("");

    try {

        await emailjs.send(

            import.meta.env.VITE_EMAILJS_SERVICE,
            import.meta.env.VITE_EMAILJS_TEMPLATE,

            {

                name: form.name,
                email: form.email,
                message: form.message

            },

            import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        );

        setSuccess(t.contact.success);

        const whatsappNumber = "59177538707";

        const whatsappMessage = `Hello Yaya!

I found Bolivian Film Fixers through your website and would like to get in touch.

Name: ${form.name}
Email: ${form.email}

Project Details:
${form.message}`;

        window.open(

            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,

            "_blank"

        );

        setForm({

            name: "",
            email: "",
            message: ""

        });

    }

    catch (error) {

        console.error(error);

        alert(t.contact.error);

    }

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