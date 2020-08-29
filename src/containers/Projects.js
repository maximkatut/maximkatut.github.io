import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectsBlock = styled.div`
  text-align: center;

  a {
    color: ${(props) => (props.lightMode ? "#222" : "#eee")};
  }
`;

export class Projects extends Component {
  render() {
    const { lightMode } = this.props;
    return (
      <section>
        <ProjectsBlock lightMode={lightMode}>
          <Link to="/" style={{ textDecoration: "none" }}>
            {"<"} Go back
          </Link>
        </ProjectsBlock>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  lightMode: state.lightMode,
});

export default connect(mapStateToProps)(Projects);
