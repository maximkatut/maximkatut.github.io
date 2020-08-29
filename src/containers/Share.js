import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import facebookImg from "../assets/images/social/facebook.svg";
import twitterImg from "../assets/images/social/twitter.svg";
import linkedInImg from "../assets/images/social/linkedin.svg";

import facebookImgWhite from "../assets/images/social/facebook-white.svg";
import twitterImgWhite from "../assets/images/social/twitter-white.svg";
import linkedInImgWhite from "../assets/images/social/linkedin-white.svg";

const ShareBlock = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40vh;
  padding: 0 50px;
  margin: 60px 0 180px 0;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    height: 100%;
    margin-bottom: 60px;
  }
`;

const ShareItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31%;
  outline: 1px solid ${(props) => (props.lightMode ? "#222" : "#eee")};
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  overflow: hidden;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundImg});
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.3s ease-in-out;
    opacity: 0.2;
    transform: scale(0);
  }

  &:hover {
    outline: 1px solid #c72f2f;

    &:before {
      transform: scale(3);
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
  }
`;

const ShareSocial = [
  {
    title: "Facebook",
    url:
      "https://www.facebook.com/sharer/sharer.php?u=https://maxbaravy.com&t=MaxBaravy.com",
    img: facebookImg,
    imgWhite: facebookImgWhite,
  },
  {
    title: "Twitter",
    url:
      "http://twitter.com/share?text=Max Baravy - Web Developer&url=https://maxbaravy.com/&hashtags=webdeveloper,dev,react,frontend",
    img: twitterImg,
    imgWhite: twitterImgWhite,
  },
  {
    title: "LinkedIn",
    url:
      "https://www.linkedin.com/shareArticle?mini=true&url=https://maxbaravy.com&title=Max Baravy - Web Developer&summary=Max Baravy - Web Developer&source=maxbaravy.com",
    img: linkedInImg,
    imgWhite: linkedInImgWhite,
  },
];

const clickLink = (url) => {
  window.open(
    url,
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600"
  );
};

const Share = ({ lightMode }) => {
  console.log(linkedInImg);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Max Baravy - react web developer" />
        <title>Max Baravy - Share my website</title>
      </Helmet>
      <ShareBlock>
        {ShareSocial.map((link) => {
          return (
            <ShareItem
              key={link.title}
              onClick={() => {
                clickLink(link.url);
              }}
              title={`Share on ${link.title}`}
              lightMode={lightMode}
              backgroundImg={lightMode ? link.img : link.imgWhite}
            >
              {link.title}
            </ShareItem>
          );
        })}
      </ShareBlock>
    </>
  );
};

const mapStateToProps = (state) => ({
  lightMode: state.lightMode,
});

export default connect(mapStateToProps)(Share);
