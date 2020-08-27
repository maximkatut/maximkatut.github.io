import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { ActionCreator } from "../../redux/actions";

const Toggle = styled.span`
  position: absolute;
  left: 200px;
  top: 10px;
  cursor: pointer;
  transition: transform 0.1s ease-in;

  &:hover {
    transform: scale(1.3);
  }

  @media (max-width: 900px) {
    left: 60px;
  }
`;

class LightModeToggle extends Component {
  constructor(props) {
    super(props);

    if (JSON.parse(localStorage.getItem("LIGHT_MODE")) === true) {
      document.body.classList.add("light-mode");
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lightMode !== this.props.lightMode) {
      if (this.props.lightMode) {
        document.body.classList.add("light-mode");
      } else {
        document.body.classList.remove("light-mode");
      }
      localStorage.setItem("LIGHT_MODE", this.props.lightMode);
    }
  }

  render() {
    const { lightMode, toggleLightMode } = this.props;
    return (
      <Toggle
        role="img"
        aria-label="light mode"
        onClick={() => {
          toggleLightMode(!lightMode);
        }}
      >
        {lightMode ? "🌚" : "🌝"}
      </Toggle>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lightMode: state.lightMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLightMode(lightMode) {
      dispatch(ActionCreator.setLightMode(lightMode));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LightModeToggle);
