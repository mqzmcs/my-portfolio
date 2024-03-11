import { useState, useEffect } from "react";
import axios from "axios";
import "./SkillsPage.css";

function SkillsPage() {
    const [skill, setSkill] = useState([]);

    const getSkills = async () => {
        try {
            const response = await axios.get("http://localhost:5005/skillsPage");
            setSkill(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSkills();
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
                <h3 className="page-title skills-page-title">Technologies I use and other things along the way</h3>
                <div className="skills-container">
                    {skill.map((skill) => (
                        <div
                            className="skill-item"
                            key={skill.id}>
                            <img
                                className="skill-item-image"
                                src={skill.iconURL}
                                alt={skill.iconAlt}
                            />
                            <h4 className="skill-item-name">{skill.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SkillsPage;