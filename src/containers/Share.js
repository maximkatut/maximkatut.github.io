import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31%;
  outline: 1px solid ${(props) => (props.lightMode ? "#222" : "#eee")};
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    outline: 1px solid #c72f2f;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
  }
`;

const clickLink = (url) => {
  window.open(
    url,
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600"
  );
};

const Share = ({ lightMode }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Max Baravy - react web developer" />
        <title>Max Baravy - Share my website</title>
      </Helmet>
      <ShareBlock>
        <ShareItem
          lightMode={lightMode}
          onClick={() => {
            clickLink(
              "https://www.facebook.com/sharer/sharer.php?u=https://maxbaravy.com&t=MaxBaravy.com"
            );
          }}
          title="Share on Facebook"
        >
          Facebook
        </ShareItem>
        <ShareItem
          lightMode={lightMode}
          onClick={() => {
            clickLink(
              "http://twitter.com/share?text=Max Baravy - Web Developer&url=https://maxbaravy.com/&hashtags=webdeveloper,dev,react,frontend"
            );
          }}
          title="Share on Twitter"
        >
          Twitter
        </ShareItem>
        <ShareItem
          lightMode={lightMode}
          onClick={() => {
            clickLink(
              "https://www.linkedin.com/shareArticle?mini=true&url=https://maxbaravy.com&title=Max Baravy - Web Developer&summary=Max Baravy - Web Developer&source=maxbaravy.com"
            );
          }}
          title="Share on LinkedIn"
        >
          LinkedIn
        </ShareItem>
      </ShareBlock>
    </>
  );
};

const mapStateToProps = (state) => ({
  lightMode: state.lightMode,
});

export default connect(mapStateToProps)(Share);
