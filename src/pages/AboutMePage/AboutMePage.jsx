import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AboutMePage.css";

function AboutMePage() {
    const [content, setContent] = useState({ topContent: [], bottomContent: [] });

    const getContent = async () => {
        try {
            const response = await axios.get("http://localhost:5005/profilePage");
            setContent(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getContent();
    }, []);

    return (
        <>
            <div id="profile-page-top"></div>
            <div className="page-container profile-page-container">
                <hr />
                <h1 className="about-me-headline">
                    Hi! I'm Alfonso and welcome to my portfolio!
                </h1>
                <div className="about-me-container-top">
                    {content.topContent.map((item) => item.type === "image" ? (
                        <div
                            key={item.id}
                            className="profile-image-container">
                            <img
                                id="profile-image-top"
                                src={item.imageURL}
                                alt="profile image one of two"
                            />
                        </div>
                    ) : (
                        <div
                            key={item.id}
                            className="about-me-content-container-top">
                            {item.content.split(/\s{4}/).map((section, index) =>
                                <p
                                    key={index}
                                    className="about-me-body-text">
                                    {section}
                                </p>
                            )}
                        </div>
                    )
                    )}
                </div>
                <div className="about-me-container-bottom">
                    {content.bottomContent.map((item) => item.type === "paragraph" ? (
                        <div
                            key={item.id}
                            className="about-me-content-container-bottom">
                            {item.content.split(/\s{4}/).map((section, index) =>
                                <p
                                    key={index}
                                    className="about-me-body-text">
                                    {section}
                                </p>
                            )}
                        </div>
                    ) : (
                        <div
                            key={item.id}
                            className="profile-image-container">
                            <img
                                id="profile-image-bottom"
                                src={item.imageURL}
                                alt="profile image two of two"
                            />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
}

export default AboutMePage;