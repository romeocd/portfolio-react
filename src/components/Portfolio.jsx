import React from 'react';
import Project from './Project';
import Card from './Card';

const Portfolio = () => {
    const projects = [
    {
        title: "Project 1",
        imageUrl: "/path/to/image1.jpg",
        description: "Description for Project 1",
        liveUrl: "http://link-to-project1.com",
        githubUrl: "http://github-link-to-project1.com"
      },
      {
        title: "Project 2",
        imageUrl: "/path/to/image2.jpg",
        description: "Description for Project 2",
        liveUrl: "http://link-to-project2.com",
        githubUrl: "http://github-link-to-project2.com"
      },
      {
        title: "Project 3",
        imageUrl: "/path/to/image3.jpg",
        description: "Description for Project 3",
        liveUrl: "http://link-to-project3.com",
        githubUrl: "http://github-link-to-project3.com"
      },
      {
        title: "Project 4",
        imageUrl: "/path/to/image4.jpg",
        description: "Description for Project 4",
        liveUrl: "http://link-to-project4.com",
        githubUrl: "http://github-link-to-project4.com"
      },
      {
        title: "Project 5 ",
        imageUrl: "/path/to/image5.jpg",
        description: "Description for Project 5",
        liveUrl: "http://link-to-project5.com",
        githubUrl: "http://github-link-to-project5.com"
      },
      {
        title: "Project 6",
        imageUrl: "/path/to/image2.jpg",
        description: "Description for Project 6",
        liveUrl: "http://link-to-project6.com",
        githubUrl: "http://github-link-to-project6.com"
      }
    ];

    return (
      <Card>
        <div className="portfolio">
          {projects.map(project => (
            <Project 
              key={project.title}
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </Card>
      );
    };

    export default Portfolio;