import React, { useState } from 'react';

const Project = ({ title, imageUrl, description, liveUrl, githubUrl }) => {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const toggleImageSize = () => setIsEnlarged(!isEnlarged);

    return (
        <div className="project">
            <img 
                src={imageUrl} 
                alt={`Project ${title}`} 
                className="project-images"
                onClick={toggleImageSize}
                style={{ 
                    cursor: 'pointer',
                    transform: isEnlarged ? 'scale(3)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                }}
            />
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-links">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="live-demo">Live Demo</a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-repo">GitHub Repo</a>
                </div>
            </div>
        </div>
    );  
};

export default Project;
