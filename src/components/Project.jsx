import React from 'react';

const Project = ({ title, imageUrl, description, liveUrl, githubUrl }) => {
    return (
        <div className="project">
            <img src={imageUrl} alt={`Project ${title}`} />
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-links">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
            </div>
        </div>
    );
};

export default Project;
