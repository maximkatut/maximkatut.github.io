import React from "react";
import { Helmet } from "react-helmet";

import Aside from "../Aside/Aside";
import Greeting from "../Greeting/Greeting";
import About from "../About/About";
import Projects from "../Projects/Projects";

const Main = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Max Baravy - react web developer" />
        <title>Max Baravy - Front End Developer</title>
      </Helmet>
      <main className="page-main">
        <h1 className="visually-hidden">Max Baravy - Front End Developer</h1>
        <Aside />
        <Greeting />
        <Projects />
        <About />
      </main>
    </>
  );
};

export default Main;
