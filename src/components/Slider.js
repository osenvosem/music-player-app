import React, { Component, createRef } from "react";
import styled from "styled-components";

// accepts props:
// width, height, thumbSize, thumbColor, thumbActiveColor, thumbBorder, thumbShadow
const SliderElement = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  :focus {
    outline: none;
  }
  ::-moz-focus-outer {
    border: 0;
  }

  height: ${({ height }) => height || "4px"}
  width: ${({ width }) => width};
  background: ${({ color }) => color || `rgba(0, 0, 0, 0.12)`};
  border-radius: 4px;

  ::-moz-range-track {
    height: 4px;
    width: ${({ width }) => width};
    background: rgba(0, 0, 0, 0.12);
    border-radius: 4px;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: ${({ thumbSize }) => thumbSize || "10px"}
    height: ${({ thumbSize }) => thumbSize || "10px"};
    background: ${({ thumbColor }) => thumbColor || "white"};
    border: ${({ thumbBorder }) => thumbBorder || "none"};
    border-radius: 20px;
    box-shadow: ${({ thumbShadow }) => thumbShadow || "none"};
  }

  ::-moz-range-thumb {
    box-sizing: border-box;
    width: ${({ thumbSize }) => thumbSize || "10px"}
    height: ${({ thumbSize }) => thumbSize || "10px"};
    background: ${({ thumbColor }) => thumbColor || "white"};
    border: ${({ thumbBorder }) => thumbBorder || "none"}
    border-radius: 20px;
    box-shadow: ${({ thumbShadow }) => thumbShadow || "none"};
  }

  :disabled::-webkit-slider-thumb {
    background: #ccc;
    box-shadow: 0 0 0 1px #eee;
  }
  :disabled::-moz-range-thumb {
    background: #ccc;
    box-shadow: 0 0 0 1px #eee;
  }

  :active:not(:disabled)::-webkit-slider-thumb {
    background: ${({ thumbActiveColor, thumbColor }) =>
      thumbActiveColor || thumbColor};
  }
  :active:not(:disabled)::-moz-range-thumb {
    background: ${({ thumbActiveColor, thumbColor }) =>
      thumbActiveColor || thumbColor};
  }
`;

class Slider extends Component {
  render() {
    return <SliderElement {...this.props} />;
  }
}

export default Slider;
