import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h2 className="visually-hidden">Footer</h2>
      <div className="header__logo">
        <Link to="/" className="header__logo-link">
          M<span>a</span>x Baravy
        </Link>
        <p className="header__job-title">Front-End Developer</p>
        <p>© {String(new Date().getFullYear())}</p>
      </div>
    </footer>
  );
};

export default Footer;
