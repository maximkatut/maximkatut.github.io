import React from "react";
import Slide from "../Slide/Slide";

import { projects } from "../../data/projects";
import styled from "styled-components";

const ProjectBlock = styled.div`
  padding: 20px 0;
`;

export default function Project() {
  return projects.map(({ title, img, description, url }) => (
    <ProjectBlock key={title}>
      <Slide title={title} img={img} description={description} url={url} />
    </ProjectBlock>
  ));
}
