import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AboutMePage.css";

function AboutMePage() {
    const [content, setContent] = useState({ topContent: [], bottomContent: [] });
    const [doc, setDoc] = useState([]);

    const getContent = async () => {
        try {
            const response = await axios.get("http://localhost:5005/profilePage");
            setContent(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getDoc = async () => {
        try {
            const response = await axios.get("http://localhost:5005/myDocs");
            setDoc(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getContent();
        getDoc();
    }, []);

    return (
        <>
            <div id="profile-page-top"></div>
            <div className="page-container profile-page-container">
                <hr />
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
                        <div className="about-me-content-container-top">
                            <h1 className="about-me-headline-top">
                                Hi! I'm Alfonso, and I love developing stuff!
                            </h1>
                            <div key={item.id}>
                                {item.content.split(/\s{4}/).map((section, index) =>
                                    <p
                                        key={index}
                                        className="about-me-body-text">
                                        {section}
                                    </p>
                                )}
                            </div>
                        </div>
                    )
                    )}
                </div>
                <div className="personal-docs-container">
                    {doc.map((item) => (
                        <a
                            key={item.id}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.docURL}
                        >
                            <div className="personal-doc-item btns">
                                {item.name}
                            </div>
                        </a>
                    ))}
                </div>
                <div className="about-me-container-bottom">
                    {content.bottomContent.map((item) => item.type === "paragraph" ? (
                        <div className="about-me-content-container-bottom">
                            <h1 className="about-me-headline-bottom">
                                ...and creating digital solutions!
                            </h1>
                            <div
                                key={item.id}>
                                {item.content.split(/\s{4}/).map((section, index) =>
                                    <p
                                        key={index}
                                        className="about-me-body-text">
                                        {section}
                                    </p>
                                )}
                            </div>
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