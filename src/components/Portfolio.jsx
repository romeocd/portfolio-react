import React from 'react';
import Project from './Project';
import Card from './Card';

const Portfolio = () => {
    const projects = [
    {
        title: "Random Password Generator",
        imageUrl: "./src/assets/images/randompasswordgenerator.png",
        description: "The random password generator was created to enable employees to generate random passwords based on criteria that they've selected.",
        liveUrl:"https://romeocd.github.io/random-password-generator/",
        githubUrl: "https://github.com/romeocd/random-password-generator.git"
      },
      {
        title: "Coding Quiz",
        imageUrl: "./src/assets/images/codingquiz.png",
        description: "The coding quiz was created to take a timed quiz on JavaScript fundamentals that stores high scores. The app runs in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript.",
        liveUrl: "https://romeocd.github.io/coding-quiz/",
        githubUrl: "https://github.com/romeocd/coding-quiz"
      },
      {
        title: "Note Taker",
        imageUrl: "./src/assets/images/notetaker.png",
        description: "This application uses Express.js back end to save and retrieve note data from a JSON file.",
        liveUrl: "https://note-taker-rd-eae559cb1f06.herokuapp.com/",
        githubUrl: "https://github.com/romeocd/note-taker"
      },
      {
        title: "Employee Database",
        imageUrl: "./src/assets/images/employeedatabase.png",
        description: "This application manages a company's employee database using Node.js, Inquirer and MySQL while using the command line.",
        githubUrl: "https://github.com/romeocd/employee-database"
      },
      {
        title: "Whats For Dinner ",
        imageUrl: "./src/assets/images/whats-for-dinner.png",
        description: "Whats For Dinner is a web application that allows users to discover, share, and explore a wide range of recipes. Users can search for specific recipes, and interact with a vibrant community of cooking enthusiasts.",
        liveUrl: "https://recipe-finder-whats-for-dinner-17c80c97d30f.herokuapp.com/",
        githubUrl: "https://github.com/rgillooly/Whats-For-Dinner"
      },
      {
        title: "PWA Text Editor",
        imageUrl: "/src/assets/images/pwa-text-editor.png",
        description: "The PWA Text editor runs in the web browser and is designed to be single-page application that meets the PWA criteria. The application also functions online and and implemented methods for getting and storing data to an IndexedDB database",
        liveUrl: "https://pwa-text-editor-gkwv.onrender.com/",
        githubUrl: "https://github.com/romeocd/pwa-text-editor"
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