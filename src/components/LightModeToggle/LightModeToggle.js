import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { ActionCreator } from "../../redux/actions";

const ToggleBox = styled.div`
  z-index: 0;
  padding: 4px 3px 0px;
  position: absolute;
  left: 200px;
  top: 10px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  width: 55px;
  border-radius: 20px;
  background-color: ${(props) => (props.lightMode ? `#999` : `#555`)};

  @media (max-width: 900px) {
    display: none;
  }
`;

const Toggle = styled.div`
  position: absolute;
  top: 3px;
  left: ${(props) => (props.lightMode ? `3px` : `33px`)};
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 50%;
  transition: left 0.1s ease-in;

  &:focus {
    box-shadow: 0 0 2px 3px rgba(199, 47, 47, 0.8);
    outline: none;
  }
`;

class LightModeToggle extends Component {
  constructor(props) {
    super(props);

    if (JSON.parse(localStorage.getItem("LIGHT_MODE")) === true) {
      document.body.classList.add("light-mode");
    }
  }

  componentDidMount() {
    const { toggleLightMode } = this.props;
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
        const lightMode = e.matches ? false : true;
        toggleLightMode(lightMode);
      });
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
      <ToggleBox
        role="img"
        lightMode={lightMode}
        aria-label="light mode"
        onClick={() => {
          toggleLightMode(!lightMode);
          this.toggle.focus();
        }}
        onKeyPress={(evt) => {
          evt.preventDefault();
          if (evt.key === `Enter` || ` `) {
            toggleLightMode(!lightMode);
            this.toggle.focus();
          }
        }}
      >
        <span role="img" aria-label="dark mode">
          🌝 🌚
        </span>
        <Toggle
          tabIndex="0"
          lightMode={lightMode}
          ref={(toggle) => (this.toggle = toggle)}
        />
      </ToggleBox>
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
