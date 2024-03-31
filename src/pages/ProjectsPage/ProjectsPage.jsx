import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Ellipsis from "../../components/Ellipsis/Ellipsis";
import "./ProjectsPage.css";

function ProjectsPage() {
    const [project, setProject] = useState([]);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const backendAPI = process.env.REACT_APP_BACKEND_API;

    const fetchProjects = useCallback(async () => {
        try {
            const response = await axios.get(`${backendAPI}/projects`);
            setProject(response.data);
        } catch (error) {
            console.log(error);
        }
    }, [backendAPI]);

    useEffect(() => {
        if (!isDataFetched) {
            fetchProjects();
            setIsDataFetched(true);
        }
    }, [isDataFetched, fetchProjects]);

    return (
        <>
            <div id="projects-page-top"></div>
            <div className="page-container projects-page-container">
                <Ellipsis />
                <h3 className="page-title projects-page-title">Some of my work</h3>
                <div className="projects-container">
                    {Array.isArray(project) && project.map((project) => (
                        <div
                            className="project-item"
                            key={project.id}>
                            <img
                                className="project-item-image"
                                src={project.imageURL}
                                alt={project.imageAlt}
                            />
                            <div className="project-text">
                                <h2 className="project-text-title">{project.name}</h2>
                                <p className="project-item-description">{project.description}</p>
                                <div className="project-technologies-used">
                                    {project.technologies.map((tech, index) => (
                                        <div
                                            className="project-tech-name"
                                            key={index}>
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                                <div className="project-links-container">
                                    <a
                                        className="project-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={project.clientRepoURL}>
                                        <FaExternalLinkSquareAlt id="link-icon" />
                                        GitHub Repo
                                    </a>
                                    <a className="project-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={project.liveURL}>
                                        <FaExternalLinkSquareAlt id="link-icon" />
                                        See it Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
}

export default ProjectsPage;