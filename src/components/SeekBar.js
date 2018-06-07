import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import { rgba } from "polished";

import Slider from "./Slider";

const SeekBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
`;

const SeekBar = props => (
  <SeekBarWrapper>
    <Slider
      {...props}
      width="336px"
      thumbSize="20px"
      thumbColor={props.theme.colors.blue}
      thumbBorder="4px solid white"
      thumbShadow={`0 0 8px ${rgba(props.theme.colors.primary, 0.38)}`}
    />
  </SeekBarWrapper>
);

export default withTheme(SeekBar);
