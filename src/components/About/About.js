import React from "react";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">About me</h2>
      <div className="about__description">
        Hi!{" "}
        <span role="img" aria-label="hi emoji">
          🙋‍♂️
        </span>{" "}
        My name is Max. I'm from Belarus 🇧🇾 Currently living in the United
        States 🇺🇸. I am front end developer with a strong passion of ReactJS
        framework. Each day I learn something new and create web products using
        best practices and modern techhologies.
        <div className="about__stack">
          <span role="img" aria-label="hi emoji">
            🛠
          </span>{" "}
          My tech stack:
          <ul className="about__list">
            <li className="about__item">
              Responsive web-development: HTML5, CSS/SCSS
            </li>
            <li className="about__item">Frontend: JavaScript (ES5/ES6)</li>
            <li className="about__item">
              JavaScript libraries: React, Redux, TypeScript
            </li>
            <li className="about__item">Testing libraries: Jest, Enzyme</li>
            <li className="about__item">Code bundlers: Gulp, Webpack</li>
            <li className="about__item">UX/UI: Adobe Photoshop, Figma</li>
            <li className="about__item">Version-control system: Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
