import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me">
      <img src="/path/to/your/avatar.jpg" alt="Your Name" />
      <div className="bio">
        <h2>About Me</h2>
        <p>
          Write a short bio here. This might include your background, 
          what you're passionate about, your skills, or any other 
          information you want to share about yourself.
        </p>
        {/* Add more personal details or sections as needed */}
      </div>
    </div>
  );
};

export default AboutMe;