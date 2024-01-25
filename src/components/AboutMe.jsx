import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me">
      <img src="./src/assets/images/profilepic.jpg" alt="Romeo Dumlao Jr." className="profile-picture" />
      <div className="bio">
        <h2>About Me</h2>
        <p>
        Hello! I'm Romeo Dumlao and welcome to my personal portfolio! I am a beginner web developer and currently learning to be a Full Stack Web Developer under the Rutgers Coding Bootcamp program.
I will be making updates to this page as I learn and grow as a developer. Please click on my Portfolio to see my projects so far.
If you have any questions, please don't hesitate to contact me!
        </p>
        {/* Add more personal details or sections as needed */}
      </div>
    </div>
  );
};

export default AboutMe;