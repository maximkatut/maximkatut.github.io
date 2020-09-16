import React, { Component } from "react";
import Slider from "react-slick";

import Slide from "../Slide/Slide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { projects } from "../../data/projects";

const SLIDES_ON_MAIN = 3;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrows: true,
    };

    this.getWidth = this.getWidth.bind(this);
  }

  getWidth() {
    this.setState({
      arrows: document.body.clientWidth > 700,
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.getWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getWidth);
  }
  render() {
    const { arrows } = this.state;
    const settings = {
      dots: true,
      dotsClass: "dots",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows,
    };
    return (
      <Slider {...settings}>
        {projects
          .slice(0, SLIDES_ON_MAIN)
          .map(({ title, img, description, url }) => {
            return (
              <Slide
                key={title}
                title={title}
                img={img}
                description={description}
                url={url}
              />
            );
          })}
      </Slider>
    );
  }
}
