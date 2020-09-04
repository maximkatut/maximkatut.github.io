import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Project from "../components/Project/Project";

const ProjectsBlock = styled.div`
  text-align: center;
  padding: 0 50px;

  a {
    color: ${(props) => (props.lightMode ? "#222" : "#eee")};
  }
`;

export class Projects extends Component {
  render() {
    const { lightMode } = this.props;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Max Baravy - react web developer" />
          <title>Max Baravy - My portfolio</title>
        </Helmet>
        <section>
          <ProjectsBlock lightMode={lightMode}>
            <Link to="/" style={{ textDecoration: "none" }}>
              {"<"} Go back
            </Link>
            <Project />
          </ProjectsBlock>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  lightMode: state.lightMode,
});

export default connect(mapStateToProps)(Projects);
