import React from "react";
import { withRouter } from "react-router-dom";

import Slider from "../Slider/Slider";

const Projects = (props) => {
  return (
    <section className="projects">
      <h2 className="projects__title">Some projects</h2>
      <div className="projects__description">
        <Slider />
        <div className="projects__more">
          <button
            className="button"
            onClick={() => {
              props.history.push("/projects");
              window.scrollTo(0, 0);
            }}
          >
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Projects);
