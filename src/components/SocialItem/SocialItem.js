import React from "react";

const SocialItem = ({ item }) => {
  return (
    <li className="social__item">
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className={`social__link link-${item.name.toLowerCase()}`}
      >
        {item.name}
      </a>
    </li>
  );
};

export default SocialItem;
