import React from "react";

import LightModeToggle from "../LightModeToggle/LightModeToggle";
import SocialList from "../SocialList/SocialList";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="header__logo-link" alt="logo">
          M<span>a</span>x Baravy
        </Link>
        <p className="header__job-title">Front-End Developer</p>
        <LightModeToggle />
      </div>
      <SocialList />
    </header>
  );
};

export default Header;
