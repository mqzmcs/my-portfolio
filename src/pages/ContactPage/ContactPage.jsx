import React, { useState, useRef } from 'react';
import "./ContactPage.css";

function ContactPage() {
    const formRef = useRef(null);

    return (
        <>
            <div id="contact-page-top"></div>
            <div className="page-container contact-page-container">
                <h3 className="page-title">Get in touch!</h3>

                <form
                    className="contact-form"
                    method="post"
                    ref={formRef}
                    name="google-sheet">
                    <fieldset className="contact-fieldset">
                        <legend className="form-legend">
                            Leave me a message, and I'll get back to you as soon as I can!
                        </legend>
                        <div className="form-style">
                            <label for="form-name">Name</label>
                            <br />
                            <input
                                type="name"
                                id="form-name"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-style">
                            <label for="form-email">Email</label>
                            <br />
                            <input
                                type="email"
                                id="form-email"
                                placeholder="Your Email"
                                required />
                        </div>
                        <div className="form-style">
                            <label for="form-message">Message</label>
                            <br />
                            <textarea
                                id="form-message"
                                cols="80"
                                rows="10"
                                placeholder="Send me a message!"
                                required>
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