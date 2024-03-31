import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import "./AboutMePage.css";

function AboutMePage() {
    const [image, setImage] = useState([]);
    const [paragraph, setParagraph] = useState([]);
    const [doc, setDoc] = useState([]);
    const backendAPI = process.env.REACT_APP_BACKEND_API;

    const getImage = useCallback(async () => {
        try {
            const response = await axios.get(`${backendAPI}images`);
            setImage(response.data);
        } catch (error) {
            console.log(error);
        }
    }, [backendAPI]);

    const getParagraph = useCallback(async () => {
        try {
            const response = await axios.get(`${backendAPI}profile`);
            setParagraph(response.data);
        } catch (error) {
            console.log(error);
        }
    }, [backendAPI]);

    const getDoc = useCallback(async () => {
        try {
            const response = await axios.get(`${backendAPI}docs`);
            setDoc(response.data);
        } catch (error) {
            console.log(error);
        }
    }, [backendAPI]);

    useEffect(() => {
        getImage();
        getParagraph();
        getDoc();
    }, [getImage, getParagraph, getDoc]);

    return (
        <>
            <div id="profile-page-top"></div>
            <div className="page-container profile-page-container">
                <div id="hr-bar"></div>

                <div className="about-me-container-top">
                    {Array.isArray(image) && image.map((img) => {
                        if (img.id === "image01") {
                            return (
                                <div
                                    key={img.id}
                                    className="profile-image-container"
                                >
                                    <img
                                        id="profile-image-top"
                                        src={img.imageURL}
                                        alt={img.imageAlt}
                                    />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                    <div className="about-me-content-container-top">
                        <h1 className="about-me-headline-top">
                            Hi! I'm Alfonso, and I love developing stuff!
                        </h1>
                        {Array.isArray(paragraph) && paragraph.map((para) => {
                            if (para.id !== "paragraph03") {
                                return (
                                    <div key={para.id}>
                                        <p className="about-me-body-text">
                                            {para.content}
                                        </p>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>

                <div className="personal-docs-container">
                    {Array.isArray(doc) && doc.map((item) => (
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
                    <div className="about-me-content-container-bottom">
                        <h1 className="about-me-headline-bottom">
                            ...and creating digital solutions!
                        </h1>
                        {Array.isArray(paragraph) && paragraph.map((para) => {
                            if (para.id === "paragraph03") {
                                return (
                                    <div key={para.id}>
                                        <p className="about-me-body-text">
                                            {para.content}
                                        </p>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                    {Array.isArray(image) && image.map((img) => {
                        if (img.id === "image02") {
                            return (
                                <div
                                    key={img.id}
                                    className="profile-image-container"
                                >
                                    <img
                                        id="profile-image-bottom"
                                        src={img.imageURL}
                                        alt={img.imageAlt}
                                    />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </>
    );
}

export default AboutMePage;