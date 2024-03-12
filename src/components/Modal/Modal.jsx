import React, { useState } from "react";
import "./Modal.css";

function Modal() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleModal = () => {
        if (modalVisible === false) {
            setModalVisible(true);
        }

        if (modalVisible === true) {
            setModalVisible(false);

            /*
            const element = document.getElementById("profile-page-top");

            if (element) {
                element.scrollIntoView({ behavior: "auto" });
            }
            */
        }
    };

    return (
        <>
            <span
                id="modal-open-btn"
                onClick={handleModal}>open
            </span>
            {modalVisible && (
                    <div className="modal-overlay">
                    <div className="modal-container">
                        <div className="modal-inner">
                            <span
                                className="modal-close-btn"
                                onClick={handleModal}>
                                    Back
                                </span>
                            <h1>Test</h1>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;