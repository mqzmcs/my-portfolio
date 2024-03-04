import React, { useState } from "react";
import "./AboutMePage.css";

function AboutMePage() {
    const [popupVisible, setPopupVisible] = useState(false);

    const handlePopup = () => {
        if (popupVisible === false) {
            setPopupVisible(true);
        }

        if (popupVisible === true) {
            setPopupVisible(false);

            const element = document.getElementById("profile-page-top");

            if (element) {
                element.scrollIntoView({ behavior: "auto" });
            }
        }
    };

    return (
        <>
            <div id="profile-page-top"></div>
            <div className="page-container profile-page-container">
                <hr />
                <div className="about-me-container-top">
                    <img id="profile-my-image" src="./avatar.jpg" alt="profile image"></img>
                    <div className="about-me-content">
                        <h1 className="about-me-headline">
                            Hi! I'm Alfonso and welcome to my portfolio!
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum id iste ducimus, quaerat doloribus ex accusamus autem vitae cum veritatis ab corporis ut non! Ipsa blanditiis rem nemo rerum voluptatem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda quasi magni consequuntur pariatur ea tenetur, natus necessitatibus ipsum, atque minus tempora, repudiandae deleniti suscipit? Suscipit repudiandae reiciendis eveniet rem.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dignissimos quis assumenda fugit natus atque ipsa sunt voluptate deleniti eligendi facilis qui explicabo veniam pariatur, ex, voluptatem non possimus voluptates.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias earum aperiam alias sapiente sint tenetur molestiae dolor quasi reiciendis consequuntur accusantium corrupti magnam soluta id commodi, eligendi voluptas nam ratione.
                        </p>
                    </div>
                </div>
                <div className="about-me-container-bottom">
                    <img id="profile-image-secondary" src="./billyb-screencap.png" alt="profile image"></img>
                    <div className="about-me-content-secondary">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum id iste ducimus, quaerat doloribus ex accusamus autem vitae cum veritatis ab corporis ut non! Ipsa blanditiis rem nemo rerum voluptatem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda quasi magni consequuntur pariatur ea tenetur, natus necessitatibus ipsum, atque minus tempora, repudiandae deleniti suscipit? Suscipit repudiandae reiciendis eveniet rem.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dignissimos quis assumenda fugit natus atque ipsa sunt voluptate deleniti eligendi facilis qui explicabo veniam pariatur, ex, voluptatem non possimus voluptates.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias earum aperiam alias sapiente sint tenetur molestiae dolor quasi reiciendis consequuntur accusantium corrupti magnam soluta id commodi, eligendi voluptas nam ratione.
                        </p>
                    </div>
                </div>
                <span className="popup-open-btn" onClick={handlePopup}>Details</span>
                {popupVisible && (
                    <div className="popup-overlay">
                        <div className="popup-container">
                            <div className="popup-inner">
                                <span className="popup-close-btn" onClick={handlePopup}>Back</span>
                                <h1>Test</h1>
                            </div>
                        </div>
                    </div>
                )}
            </div >
        </>
    );
}

export default AboutMePage;