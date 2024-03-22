import ContactForm from "../../components/ContactForm/ContactForm";
import "./ContactPage.css";

function ContactPage() {

    return (
        <>
            *<div id="contact-page-top"></div>
            <div className="page-container contact-page-container">
                <div className="ellipsis-container">
                    <div className="ellipsis"></div>
                    <div className="ellipsis"></div>
                    <div className="ellipsis"></div>
                </div>
                <h3 className="page-title">Get in touch!</h3>

                <ContactForm />

            </div>
        </>
    );
}

export default ContactPage;