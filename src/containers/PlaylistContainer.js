import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  fetchPlaylistRequested,
  changeSong,
  switchPlaybackState
} from "../actionCreators";
import Playlist from "../components/Playlist";
import { getCurrentSong, getFilteredPlaylist } from "../selectors";

class PlaylistContainer extends Component {
  componentDidMount() {
    this.props.fetchPlaylistRequested("/music/playlist.json");
  }

  handleSongClick = id => {
    const {
      playlist,
      currentSong,
      switchPlaybackState,
      changeSong,
      playbackState
    } = this.props;

    if (currentSong && currentSong.id === id) {
      this.props.switchPlaybackState();
    } else {
      this.props.changeSong(id);
      if (!playbackState) switchPlaybackState();
    }
  };

  render() {
    const {
      playlist,
      playbackPosition,
      currentSong,
      changeSong,
      playbackState
    } = this.props;

    return (
      <Playlist
        playlist={playlist}
        playbackPosition={playbackPosition}
        currentSong={currentSong}
        playbackState={playbackState}
        onSongClick={this.handleSongClick}
      />
    );
  }
}

const mapStateToProps = state => {
  const { playbackPosition, playlist, currentSongId, playbackState } = state;
  return {
    playbackPosition,
    playlist: getFilteredPlaylist(state),
    playbackState,
    currentSong: getCurrentSong(state)
  };
};

const actionCreators = {
  fetchPlaylistRequested,
  changeSong,
  switchPlaybackState
};

export default connect(mapStateToProps, actionCreators)(PlaylistContainer);
