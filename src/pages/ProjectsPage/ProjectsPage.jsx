import "./ProjectsPage.css";

function ProjectsPage() {
    return (
        <>
            <div id="projects-page-top"></div>
            <div className="page-container projects-page-container">
                <h3 className="page-title">Some of my work</h3>
                <div className="projects-container">
                    <div className="project-item">
                        <img className="project-item-image" src="./logo.png" alt="project image"></img>
                        <div className="project-text">
                            <h2 className="project-item-title">Billy Biscuit</h2>
                            <p className="project-item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sunt corrupti quam in facilis vitae possimus ipsum minima enim fugit, consequatur illo autem reprehenderit numquam accusamus ut neque ipsam? Omnis.</p>
                            <p className="project-technologies">
                                <span className="technologies-used">
                                    Technologies Used:
                                </span>
                                <br />
                                JavaScript, HTML, CSS
                            </p>
                            <a className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#">
                                Try it here
                            </a>
                            <a
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#">
                                See it on GitHub
                            </a>
                        </div>
                    </div>
                    <div className="project-item">
                        <img className="project-item-image" src="./logo.png" alt="project image"></img>
                        <div className="project-text">
                            <h2 className="project-item-title">EXO App</h2>
                            <p className="project-item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sunt corrupti quam in facilis vitae possimus ipsum minima enim fugit, consequatur illo autem reprehenderit numquam accusamus ut neque ipsam? Omnis.</p>
                            <p className="project-technologies">
                                <span className="technologies-used">
                                    Technologies Used:
                                </span>
                                <br />
                                JavaScript, HTML, CSS
                            </p>
                            <a
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#">
                                Try it here
                            </a>
                            <a
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#">
                                See it on GitHub
                            </a>
                        </div>
                    </div>
                    <div className="project-item">
                        <img className="project-item-image" src="./logo.png" alt="project image"></img>
                        <div className="project-text">
                            <h2 className="project-item-title">Project L.U.I.S.</h2>
                            <p className="project-item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sunt corrupti quam in facilis vitae possimus ipsum minima enim fugit, consequatur illo autem reprehenderit numquam accusamus ut neque ipsam? Omnis.</p>
                            <p className="project-technologies">
                                <span className="technologies-used">
                                    Technologies Used:
                                </span>
                                <br />
                                JavaScript, HTML, CSS
                            </p>
                            <a
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#">
                                Try it here
                            </a>
                            <a
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#">
                                See it on GitHub
                            </a>
                        </div>
                    </div>
                    <div className="project-item">
                        <img className="project-item-image" src="./logo.png" alt="project image"></img>
                        <div className="project-text">
                            <h2 className="project-item-title">This Portfolio</h2>
                            <p className="project-item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sunt corrupti quam in facilis vitae possimus ipsum minima enim fugit, consequatur illo autem reprehenderit numquam accusamus ut neque ipsam? Omnis.</p>
                            <p className="project-technologies">
                                <span className="technologies-used">
                                    Technologies Used:
                                </span>
                                <br />
                                JavaScript, HTML, CSS
                            </p>
                            <a
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#">
                                Try it here
                            </a>
                            <a
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="#">
                                See it on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsPage;