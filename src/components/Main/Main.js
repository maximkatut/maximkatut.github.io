import React from "react";

import Aside from "../Aside/Aside";
import Greeting from "../Greeting/Greeting";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

const Main = () => {
  return (
    <main className="page-main">
      <h1 className="visually-hidden">Max Baravy front end developer</h1>
      <Aside />
      <Greeting />
      <Skills />
      <Projects />
      <About />
    </main>
  );
};

export default Main;
