import { useState } from "react";
import Ellipsis from "../../components/Ellipsis/Ellipsis";
import TimeDisplay from "../../components/TimeDisplay/TimeDisplay";
import MapDisplay from "../../components/MapDisplay/MapDisplay";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./ContactPage.css";

function ContactPage() {
    const [dropForm, setDropForm] = useState(false);
    const [dropMap, setDropMap] = useState(false);

    const handleDropForm = () => {
        if (dropForm === false || dropMap === true) {
            setDropForm(true);
            setDropMap(false);
        }

        if (dropForm === true) {
            setDropForm(false);
        }
    };

    const handleDropMap = () => {
        if (dropMap === false || dropForm === true) {
            setDropMap(true);
            setDropForm(false);
        }

        if (dropMap === true) {
            setDropMap(false);
        }
    };

    return (
        <>
            <div id="contact-page-top"></div>
            <div className="page-container contact-page-container">
                <Ellipsis />
                <h3 className="page-title contact-page-title">Get in touch</h3>
                {dropForm && (
                    <div className="contact-page-display">
                        <ContactForm />
                    </div>
                )}
                {dropMap && (
                    <div className="contact-page-display">
                        <TimeDisplay />
                        <MapDisplay />
                    </div>
                )}
                <div className="contact-container">
                    <a
                        className="contact-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/amlm-marquez">
                        <div>LinkedIn</div>
                    </a>
                    <a
                        className="contact-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/mqzmcs">
                        <div>GitHub</div>
                    </a>
                    <a
                        className="contact-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://discordapp.com/users/635626418688229395">
                        <div>Discord</div>
                    </a>
                    <div
                        className="contact-btn"
                        onClick={handleDropForm}>
                        Message Me
                    </div>
                    <div
                        className="contact-btn"
                        onClick={handleDropMap}>
                        My Location
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;