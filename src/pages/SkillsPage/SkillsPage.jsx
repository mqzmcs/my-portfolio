import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import "./SkillsPage.css";
import Ellipsis from "../../components/Ellipsis/Ellipsis";

function SkillsPage() {
    const [skill, setSkill] = useState([]);
    const backendAPI = process.env.REACT_APP_BACKEND_API;

    const getSkill = useCallback(async () => {
        try {
            const response = await axios.get(`${backendAPI}/skills`);
            setSkill(response.data);
        } catch (error) {
            console.log(error);
        }
    }, [backendAPI]);

    useEffect(() => {
        getSkill();
    }, [getSkill]);

    return (
        <>
            <div id="skills-page-top"></div>
            <div className="page-container skills-page-container">
                <Ellipsis />
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