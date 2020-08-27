import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const NotFoundBlock = styled.div`
  text-align: center;
  margin: 0 0 120px 0;
`;

const NotFound = ({ lightMode }) => {
  return (
    <NotFoundBlock>
      <p style={{ fontSize: 220 + `px` }}>404</p>
      <h1>Whoops!!!</h1>
      <p>We lost this page 😢</p>
    </NotFoundBlock>
  );
};

const mapStateToProps = (state) => ({
  lightMode: state.lightMode,
});

export default connect(mapStateToProps)(NotFound);
