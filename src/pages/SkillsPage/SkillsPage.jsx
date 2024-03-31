import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Ellipsis from "../../components/Ellipsis/Ellipsis";
import "./SkillsPage.css";

function SkillsPage() {
    const [skill, setSkill] = useState([]);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const backendAPI = process.env.REACT_APP_BACKEND_API;

    const fetchSkill = useCallback(async () => {
        try {
            const response = await axios.get(`${backendAPI}/skills`);
            setSkill(response.data);
        } catch (error) {
            console.log(error);
        }
    }, [backendAPI]);

    useEffect(() => {
        if (!isDataFetched) {
            fetchSkill();
            setIsDataFetched(true);
        }
    }, [isDataFetched, fetchSkill]);

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