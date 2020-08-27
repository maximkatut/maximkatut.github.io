import React from "react";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__description">
        <ul className="projects__list">
          <li className="projects__item">
            <img
              src="https://via.placeholder.com/300x260.png"
              alt="placeholder"
            />
          </li>
          <li className="projects__item">
            <img
              src="https://via.placeholder.com/300x260.png"
              alt="placeholder"
            />
          </li>
          <li className="projects__item">
            <img
              src="https://via.placeholder.com/300x260.png"
              alt="placeholder"
            />
          </li>
        </ul>
        <div className="projects__more">
          <button className="button">Show more</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
