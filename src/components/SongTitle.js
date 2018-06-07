import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
  text-align: center;
`;

const SongTitle = ({ currentSong }) => {
  return (
    <Title>
      {(currentSong && `${currentSong.artist} — ${currentSong.song}`) || `— —`}
    </Title>
  );
};

export default SongTitle;
