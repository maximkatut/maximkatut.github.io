import React from "react";

import Line from "../components/Line/Line";

const LINES_COUNT = 15;

const Lines = () => {
  const arr = new Array(LINES_COUNT).fill("");

  return (
    <div className="background-lines">
      {arr.map((_, id) => {
        return <Line key={id} />;
      })}
    </div>
  );
};

export default Lines;
