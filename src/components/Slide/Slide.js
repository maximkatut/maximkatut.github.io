import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const SlideBlock = styled.div`
  cursor: pointer;
  border-radius: 5px;
  background-image: url("${(props) => props.img}");
  background-repeat: none;
  background-size: cover;
  background-position: top;
  height: 300px;
  padding: 40px 20px;
  text-align: center;
  color: #eee;
  transition: background-image 1s ease-in, transform 0.3s ease-out;

  h1,
  p {
    display: none;
    margin: 20px auto;
  }

  &:hover {
    transform: scale(0.98);
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("${(props) => props.img}");

    h1,
    p {
      display: block;
    }
  }
`;

const Slide = ({ img, title, description, lightMode }) => {
  return (
    <SlideBlock img={img} lightMode={lightMode}>
      <h1>{title}</h1>
      <p>{description}</p>
    </SlideBlock>
  );
};

const mapStateToProps = (state) => ({
  lightMode: state.lightMode,
});

export default connect(mapStateToProps)(Slide);
