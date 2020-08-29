import React from "react";

import history from "../../history";
import Slider from "../Slider/Slider";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">Some projects</h2>
      <div className="projects__description">
        <Slider />
        <div className="projects__more">
          <button
            className="button"
            onClick={() => {
              history.push("/projects");
            }}
          >
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
