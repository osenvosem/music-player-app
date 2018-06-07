import React from "react";
import styled, { css } from "styled-components";

const Section = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  width: 200px;
  padding: 0 10px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        [class="next-button-path"],
        [class="previous-button-path"] {
          fill: rgba(0, 0, 0, 0.38);
        }
      `;
    } else {
      return css`
        :active [class="next-button-path"],
        :active [class="previous-button-path"] {
          fill: ${theme.colors.primary};
        }
      `;
    }
  }};

  :active [class="play-button-path"],
  :active [class="pause-button-path"] {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const PlayButton = props => (
  <Button {...props}>
    <svg width="20" height="26" xmlns="http://www.w3.org/2000/svg">
      <path
        className="play-button-path"
        d="M0 0l20 12.735L0 25.47z"
        fill="#000"
        fillRule="evenodd"
      />
    </svg>
  </Button>
);

const PauseButton = props => (
  <Button {...props}>
    <svg width="20" height="24" xmlns="http://www.w3.org/2000/svg">
      <path
        className="pause-button-path"
        d="M13.36 0H20v23.28h-6.64V0zM0 23.28V0h6.64v23.28H0z"
        fill="#000"
        fillRule="evenodd"
      />
    </svg>
  </Button>
);

const NextButton = props => (
  <Button {...props}>
    <svg width="24" height="17" xmlns="http://www.w3.org/2000/svg">
      <path
        className="next-button-path"
        d="M12.312 0L24 8.208l-11.688 8.208V0zM0 16.416V0l11.688 8.208L0 16.416z"
        fill="#000"
        fillRule="evenodd"
      />
    </svg>
  </Button>
);

const PreviousButton = props => (
  <Button {...props}>
    <svg width="24" height="17" xmlns="http://www.w3.org/2000/svg">
      <path
        className="previous-button-path"
        d="M12.329 8.22L24 0v16.438L12.329 8.22zm-.658 8.218L0 8.22 11.671 0v16.438z"
        fill="#000"
        fillRule="evenodd"
      />
    </svg>
  </Button>
);

const PlaybackButtons = ({
  playbackState,
  onPlayPauseButtonClick,
  onNextButtonClick,
  onPreviousButtonClick,
  disabled
}) => {
  return (
    <Section>
      <PreviousButton onClick={onPreviousButtonClick} disabled={disabled} />
      {playbackState ? (
        <PauseButton onClick={onPlayPauseButtonClick} />
      ) : (
        <PlayButton onClick={onPlayPauseButtonClick} />
      )}
      <NextButton onClick={onNextButtonClick} disabled={disabled} />
    </Section>
  );
};

export default PlaybackButtons;
