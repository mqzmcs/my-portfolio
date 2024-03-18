import { useState, useEffect } from "react";
import axios from "axios";
import "./SkillsPage.css";

function SkillsPage() {
    const [skill, setSkill] = useState([]);

    const getSkill = async () => {
        try {
            const response = await axios.get("http://localhost:5005/skillsPage");
            setSkill(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSkill();
    }, []);

    return (
        <>
            <div id="skills-page-top"></div>
            <div className="page-container skills-page-container">
                <div className="ellipsis-container">
                    <div className="ellipsis"></div>
                    <div className="ellipsis"></div>
                    <div className="ellipsis"></div>
                </div>
                <h3 className="page-title skills-page-title">Technologies, tools and other things I use</h3>
                <div className="skills-container">
                    {Array.isArray(skill) && skill.map((item) => (
                        <div key={item.id} className="skill-item">
                            {item.content.map((section, index) => 
                                <div
                                    key={index}
                                    className="skill-item-block">
                                    {section}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SkillsPage;