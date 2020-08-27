import React, { Component } from "react";
import styled from "styled-components";

import { getHypotenuse, getRandomNumber } from "../../utils/random";
import { connect } from "react-redux";

const MIN_ANGLE = 45;
const MAX_ANGLE = 155;
const FIRST_LOAD = 500;

const LineStyled = styled.div`
  z-index: -2;
  position: absolute;
  outline: 1px solid ${(props) => (props.lightMode ? "black" : "white")};
  opacity: 0.1;
  transform-origin: 0 0;
  width: ${(props) => props.length}px;
  left: ${(props) => getRandomNumber(0, props.width)}px;
  transform: rotate(${(props) => props.angle}deg);
`;

class Line extends Component {
  constructor(props) {
    super(props);

    this.state = {
      angle: getRandomNumber(MIN_ANGLE, MAX_ANGLE),
      length: getHypotenuse(
        document.body.clientWidth + FIRST_LOAD,
        document.body.clientHeight + FIRST_LOAD
      ),
      width: document.body.clientWidth,
    };

    this.getLine = this.getLine.bind(this);
  }

  getLine() {
    this.setState({
      length: getHypotenuse(
        document.body.clientWidth,
        document.body.clientHeight
      ),
      angle: getRandomNumber(MIN_ANGLE, MAX_ANGLE),
      width: document.body.clientWidth,
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.getLine);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getLine);
  }

  render() {
    const { length, width, angle } = this.state;
    const { lightMode } = this.props;
    return (
      <LineStyled
        length={length}
        width={width}
        angle={angle}
        lightMode={lightMode}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  lightMode: state.lightMode,
});

export default connect(mapStateToProps)(Line);
