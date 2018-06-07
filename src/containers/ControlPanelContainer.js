import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  changeVolume,
  switchPlaybackState,
  changeSong,
  updatePlaybackPosition
} from "../actionCreators";
import { getCurrentSong } from "../selectors";

import SongTitle from "../components/SongTitle";
import SeekBar from "../components/SeekBar";
import PlaybackButtons from "../components/PlaybackButtons";
import VolumeBar from "../components/VolumeBar";

const Devider = styled.div`
  height: 10px;
  width: 200px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  margin: 0 auto;
`;
const TitleSeekBarSection = styled.section``;
const ControlsVolumeSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 80px;
  padding: 0 20px;
`;

class ControlPanelContainer extends Component {
  handleSliderMouseUp = e => {
    this.props.updatePlaybackPosition(e.currentTarget.value);
  };

  handleSliderChange = e => {
    this.props.updatePlaybackPosition(e.currentTarget.value);
  };

  handleVolumeChange = e => {
    this.props.changeVolume(e.currentTarget.value);
  };

  handlePlayPauseButtonClick = () => {
    const { currentSongId, playlist, changeSong } = this.props;
    if (!currentSongId) changeSong(playlist[0].id);
    this.props.switchPlaybackState();
  };

  handleNextButtonClick = e => {
    const {
      playlist,
      currentSongId,
      changeSong,
      playbackState,
      switchPlaybackState
    } = this.props;

    // if the player has just been opened and there is no active song — do nothing
    if (!currentSongId) return;

    const idx = playlist.findIndex(song => song.id === currentSongId);
    if (playlist.length === idx + 1) {
      changeSong(playlist[0].id);
    } else {
      changeSong(playlist[idx + 1].id);
    }

    if (!playbackState) switchPlaybackState();
  };

  handlePreviousButtonClick = e => {
    const {
      playlist,
      currentSongId,
      changeSong,
      playbackState,
      switchPlaybackState
    } = this.props;

    // if the player has just been opened and there is no active song — do nothing
    if (!currentSongId) return;

    const idx = playlist.findIndex(song => song.id === currentSongId);
    if (idx === 0) {
      changeSong(playlist[playlist.length - 1].id);
    } else {
      changeSong(playlist[idx - 1].id);
    }

    if (!playbackState) switchPlaybackState();
  };

  render() {
    const {
      currentSong,
      currentSongId,
      playbackPosition,
      updatePlaybackPosition,
      volume,
      playbackState
    } = this.props;
    return (
      <>
        <Devider />
        <TitleSeekBarSection>
          <SongTitle currentSong={currentSong} />
          <SeekBar
            min={0}
            max={currentSong && currentSong.length * 1000}
            onChange={this.handleSliderChange}
            disabled={!currentSongId}
            value={playbackPosition}
          />
        </TitleSeekBarSection>
        <ControlsVolumeSection>
          <PlaybackButtons
            playbackState={playbackState}
            disabled={!currentSongId}
            onPlayPauseButtonClick={this.handlePlayPauseButtonClick}
            onNextButtonClick={this.handleNextButtonClick}
            onPreviousButtonClick={this.handlePreviousButtonClick}
          />
          <VolumeBar onChange={this.handleVolumeChange} value={volume} />
        </ControlsVolumeSection>
      </>
    );
  }
}

function mapStateToProps(state) {
  const {
    currentSongId,
    playbackState,
    volume,
    playbackPosition,
    playlist
  } = state;
  return {
    currentSongId,
    currentSong: getCurrentSong(state),
    playbackState,
    volume,
    playbackPosition,
    playlist
  };
}

const actionCreators = {
  changeVolume,
  switchPlaybackState,
  changeSong,
  updatePlaybackPosition
};

export default connect(mapStateToProps, actionCreators)(ControlPanelContainer);
