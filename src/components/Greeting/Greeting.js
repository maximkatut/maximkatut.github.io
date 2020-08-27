import React from "react";

const Greeting = () => {
  return (
    <section className="greeting">
      <h2 className="visually-hidden">Hello there</h2>
      <p className="greeting__hello">
      Hello<span>.</span>
      </p>
      <p className="greeting__name">
        I<span>'</span>m Max
      </p>
      <div className="greeting__buttons buttons-wrapper">
        <button className="button">Portfolio</button>
        <button className="button">Contact Me</button>
      </div>
    </section>
  );
};

export default Greeting;
