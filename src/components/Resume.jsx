import React from 'react';
import Card from './Card';

const Resume = () => {
  // List of your proficiencies
  const proficiencies = ['JavaScript', 'React', 'CSS', 'HTML', 'Node.js', 'Git', 'Other Skills'];

  return (
    <Card>
    <div className="resume">
      <a href="/path/to/your/resume.pdf" download="YourName_Resume">
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
    </Card>
  );
};

export default Resume;