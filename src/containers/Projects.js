import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";

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
            <button
              className="button"
              onClick={() => {
                this.props.history.goBack();
                window.scrollTo(0, 0);
              }}
            >
              Go back
            </button>
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

export default withRouter(connect(mapStateToProps)(Projects));
