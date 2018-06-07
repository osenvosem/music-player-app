import React from "react";
import styled, { withTheme } from "styled-components";

import msToMin from "../helpers/msToMin";

const MainSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  height: 330px;
`;

const Song = styled.article`
  display: flex;
  flex-flow: row nowrap;
  height: 40px;
  cursor: pointer;
  user-select: none;
  :hover {
    background: linear-gradient(to bottom right, #f3e5f5, #ede7f6);
  }
`;

const IconSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 50px;
  height: 40px;
`;

const IconActive = withTheme(({ theme }) => {
  return (
    <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.18 0a7.176 7.176 0 0 1 2.99 1.42 7.46 7.46 0 0 1 2.07 2.56c.507 1.04.76 2.147.76 3.32s-.253 2.28-.76 3.32a7.46 7.46 0 0 1-2.07 2.56 7.176 7.176 0 0 1-2.99 1.42v-1.72a5.495 5.495 0 0 0 2.14-1.16 5.81 5.81 0 0 0 1.47-1.97c.353-.767.53-1.583.53-2.45 0-.867-.177-1.683-.53-2.45a5.81 5.81 0 0 0-1.47-1.97 5.495 5.495 0 0 0-2.14-1.16V0zm2.08 7.3a3.66 3.66 0 0 1-.56 1.99 3.73 3.73 0 0 1-1.52 1.37V3.94a3.73 3.73 0 0 1 1.52 1.37 3.66 3.66 0 0 1 .56 1.99zM0 4.8h3.32L7.5.62v13.36L3.32 9.8H0v-5z"
        fill={theme.colors.blue}
        fillRule="evenodd"
      />
    </svg>
  );
});

const IconInactive = withTheme(({ theme }) => {
  return (
    <svg width="9" height="15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 4.568h3.924L8.76 0v14.6l-4.836-4.568H0z"
        fill={theme.colors.blue}
        fillRule="evenodd"
      />
    </svg>
  );
});

const ArtistSongName = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  flex: 0 0 284px;
  font-size: 14px;
  color: ${props => {
    return props.isCurrent ? "rgba(0, 0, 0, 0.87)" : "rgba(0, 0, 0, 0.54)";
  }};
`;

const Time = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  flex: 0 0 40px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
`;

const Playlist = ({
  playlist,
  currentSong,
  onSongClick,
  playbackState,
  playbackPosition
}) => {
  return (
    <MainSection>
      {playlist &&
        playlist.map(song => {
          const isCurrent = currentSong && song.id === currentSong.id;
          return (
            <Song key={song.id} onClick={e => onSongClick(song.id)}>
              <IconSection>
                {isCurrent ? (
                  playbackState ? (
                    <IconActive />
                  ) : (
                    <IconInactive />
                  )
                ) : null}
              </IconSection>
              <ArtistSongName isCurrent={isCurrent}>
                {song.artist} — {song.song}
              </ArtistSongName>
              <Time>
                {isCurrent
                  ? "-" +
                    msToMin(song.length - (playbackPosition / 1000).toFixed(0))
                  : msToMin(song.length)}
              </Time>
            </Song>
          );
        })}
    </MainSection>
  );
};

export default Playlist;
