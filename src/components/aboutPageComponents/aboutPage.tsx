import React from "react";

const AboutPageContainer: React.FC = () => {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
      <h1>About Me</h1>
      {/* <img
        src="/profile.jpg"
        alt="Developer Profile"
        style={{ width: 150, borderRadius: "50%", marginBottom: "1rem" }}
      /> */}
      <p>
        Hi! I'm <strong>Shashank</strong>, a passionate software developer with expertise in building modern web applications using React, TypeScript, and Node.js.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>React, Redux, Next.js</li>
        <li>TypeScript, JavaScript (ES6+)</li>
        <li>Node.js, Express</li>
        <li>HTML5, CSS3, Sass</li>
        <li>Git, GitHub, CI/CD</li>
      </ul>
      <h2>Experience</h2>
      <p>
        I have worked on various projects ranging from small startups to large enterprise applications. My focus is on writing clean, maintainable code and delivering high-quality user experiences.
      </p>
    </div>
  );
};

export default AboutPageContainer;