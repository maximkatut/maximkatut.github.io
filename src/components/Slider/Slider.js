import React, { Component } from "react";
import Slider from "react-slick";

import Slide from "../Slide/Slide";

import polind from "../../assets/images/projects/polind.png";
import cinema from "../../assets/images/projects/cinema.png";
import sixCities from "../../assets/images/projects/six-cities.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = [
  {
    title: "six-cities",
    img: sixCities,
    description:
      "SPA on React with Redux, React Router, leaflet - open source map library",
  },
  {
    title: "cinemaddict",
    img: cinema,
    description: "Single page application on Vanila JS",
  },
  {
    title: "polind",
    img: polind,
    description: "Simple landing page. CSS/HTML",
  },
  { title: "sedona", img: polind, description: "blabla" },
];

export default class extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "dots",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        {Projects.map(({ title, img, description }) => {
          return (
            <Slide
              key={title}
              title={title}
              img={img}
              description={description}
            />
          );
        })}
      </Slider>
    );
  }
}
