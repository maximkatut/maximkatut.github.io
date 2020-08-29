import React from "react";

import Slider from "../Slider/Slider";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__description">
        <Slider />
        <div className="projects__more">
          <button className="button">Show more</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
