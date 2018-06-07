import {
  CHANGE_SONG,
  CHANGE_VOLUME,
  FETCH_PLAYLIST_FAILED,
  FETCH_PLAYLIST_REQUESTED,
  FETCH_PLAYLIST_SUCCEEDED,
  SWITCH_PLAYBACK_STATE,
  UPDATE_SEARCH_TERM,
  UPDATE_PLAYBACK_POSITION
} from "./actions";

export function switchPlaybackState() {
  return {
    type: SWITCH_PLAYBACK_STATE
  };
}

export function changeVolume(value) {
  return {
    type: CHANGE_VOLUME,
    value
  };
}

export function changeSong(id) {
  return {
    type: CHANGE_SONG,
    id
  };
}

export function updateSearchTerm(searchTerm) {
  return {
    type: UPDATE_SEARCH_TERM,
    searchTerm
  };
}

export function fetchPlaylistRequested(url) {
  return {
    type: FETCH_PLAYLIST_REQUESTED,
    url
  };
}

export function fetchPlaylistSucceeded(playlist) {
  return {
    type: FETCH_PLAYLIST_SUCCEEDED,
    playlist
  };
}

export function fetchPlaylistFailed(error) {
  return {
    type: FETCH_PLAYLIST_FAILED,
    error
  };
}

export function updatePlaybackPosition(value) {
  return {
    type: UPDATE_PLAYBACK_POSITION,
    value
  };
}
