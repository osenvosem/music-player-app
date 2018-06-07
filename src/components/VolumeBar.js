import React from "react";
import styled from "styled-components";

import Slider from "./Slider";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

const VolumeBar = props => {
  return (
    <Section>
      <Slider
        {...props}
        width="150px"
        height="2px"
        color="#424242"
        thumbSize="16px"
        thumbColor="white"
        thumbActiveColor="#eee"
        thumbBorder="2px solid #424242"
      />
    </Section>
  );
};

export default VolumeBar;
