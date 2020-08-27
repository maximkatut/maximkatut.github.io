import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="aside">
      <h2 className="visually-hidden">Share</h2>
      <Link to="/share" className="aside__share-link">
        Share
      </Link>
    </aside>
  );
};

export default Aside;
