import { useState } from "react";
import Ellipsis from "../../components/Ellipsis/Ellipsis";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./ContactPage.css";

function ContactPage() {
    const [dropVisible, setDropVisible] = useState(false);

    const handleDrop = () => {
        if (dropVisible === false) {
            setDropVisible(true);
        }

        if (dropVisible === true) {
            setDropVisible(false);
        }
    };

    return (
        <>
            <div id="contact-page-top"></div>
            <div className="page-container contact-page-container">
                <Ellipsis />
                <h3 className="page-title">Get in touch!</h3>
                <span id="drop-btn" onClick={handleDrop}>Send me a message</span>
                {dropVisible && (
                    <div id="contact-form-container">
                        <ContactForm />
                    </div>
                )}
            </div>
        </>
    );
}

export default ContactPage;