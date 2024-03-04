import React, { useState, useEffect } from "react";
import "./TitleAnimation.css";

function TitleAnimation() {

    const [playTitle, setPlayTitle] = useState(false);

    useEffect(() => {
        setPlayTitle(true);
    }, []);

    return (
        <div className="title-container">
            <div className="title-left-container">
                {playTitle &&
                    <h1 id="title-left-text">ALFONSO MARQUEZ</h1>}
            </div>
            <div className="title-right-container">
                {playTitle &&
                    <h1 id="title-right-text">Portfolio</h1>}
            </div>
        </div>
    )
}

export default TitleAnimation;