import React from "react";

import SocialItem from "../SocialItem/SocialItem";

import socialLinks from "../../data/social-links";

const SocialList = () => {
  return (
    <ul className="header__social social">
      {socialLinks.map((item) => (
        <SocialItem key={item.name} item={item} />
      ))}
    </ul>
  );
};

export default SocialList;
