import React from "react";

import SocialItem from "../SocialItem/SocialItem";

const SocialNames = [
  { name: "GitHUB", url: "https://github.com/maximkatut" },
  { name: "Email", url: "mailto:maxbaravy@gmail.com?subject=Hello!" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/maksimbaravy/" },
  { name: "Facebook", url: "https://www.facebook.com/maxbaravy" },
];

const SocialList = () => {
  return (
    <ul className="header__social social">
      {SocialNames.map((item) => (
        <SocialItem key={item.name} item={item} />
      ))}
    </ul>
  );
};

export default SocialList;
