import React, { useState, useRef, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import "./ContactPage.css";

function ContactPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        const scriptURL = process.env.REACT_APP_PORTFOLIO_CONTACT_FORM_SCRIPT_URL;
        const form = formRef.current;

        const handleSubmit = (e) => {
            e.preventDefault();
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
                .then(response => {
                    setFormSubmitted(true);
                    alert("Thank you! Your message has been successfully sent.");
                })
                .catch(error => console.error("Error!", error.message));
        };

        form.addEventListener("submit", handleSubmit);

        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
    }, [formRef]);

    return (
        <>
            <div id="contact-page-top"></div>
            <div className="page-container contact-page-container">
                <div className="ellipsis-container">
                    <div className="ellipsis"></div>
                    <div className="ellipsis"></div>
                    <div className="ellipsis"></div>
                </div>
                <h3 className="page-title">Get in touch!</h3>
                <Modal />
                <form
                    className="contact-form"
                    method="post"
                    action=""
                    ref={formRef}
                    name="contact-form">
                    <fieldset className="contact-fieldset">
                        <legend className="form-legend">
                            Leave me a message, and I'll get back to you as soon as I can!
                        </legend>
                        <div className="form-style">
                            <label htmlFor="form-name">Name</label>
                            <br />
                            <input
                                type="name"
                                id="form-name"
                                name="sender-name"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-style">
                            <label htmlFor="form-email">Email</label>
                            <br />
                            <input
                                type="email"
                                id="form-email"
                                name="sender-email"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form-style">
                            <label htmlFor="form-message">Message</label>
                            <br />
                            <textarea
                                id="form-message"
                                cols="80"
                                rows="10"
                                name="message"
                                placeholder="Send me a message!"
                                required
                            >
                            </textarea>
                        </div>
                        <input
                            type="submit"
                            name="submit"
                            value="S e n d"
                            className="submit-btn" />
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default ContactPage;