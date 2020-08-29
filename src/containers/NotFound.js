import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

const NotFoundBlock = styled.div`
  text-align: center;
  margin: 0 0 120px 0;
`;

const NotFound = ({ lightMode }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Max Baravy - react web developer" />
        <title>Max Baravy - 404</title>
      </Helmet>
      <NotFoundBlock>
        <p style={{ fontSize: 220 + `px` }}>404</p>
        <h1>Whoops!!!</h1>
        <p>
          We lost this page{" "}
          <span role="img" aria-label="sad emoji">
            😢
          </span>
        </p>
      </NotFoundBlock>
    </>
  );
};

const mapStateToProps = (state) => ({
  lightMode: state.lightMode,
});

export default connect(mapStateToProps)(NotFound);
