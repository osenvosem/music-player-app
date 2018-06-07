import {
  UPDATE_SEARCH_TERM,
  SWITCH_PLAYBACK_STATE,
  CHANGE_SONG,
  CHANGE_VOLUME,
  FETCH_PLAYLIST_REQUESTED,
  FETCH_PLAYLIST_SUCCEEDED,
  FETCH_PLAYLIST_FAILED,
  UPDATE_PLAYBACK_POSITION
} from "./actions";

export default function RootReducer(state, action) {
  switch (action.type) {
    case FETCH_PLAYLIST_REQUESTED:
      return { ...state, requestInProgress: true };
    case FETCH_PLAYLIST_SUCCEEDED:
      return { ...state, requestInProgress: false, playlist: action.playlist };
    case FETCH_PLAYLIST_FAILED:
      return { ...state, requestInProgress: false, error: action.error };
    case SWITCH_PLAYBACK_STATE:
      return { ...state, playbackState: !state.playbackState };
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm };
    case CHANGE_SONG:
      return { ...state, currentSongId: action.id, playbackPosition: 0 };
    case CHANGE_VOLUME:
      return { ...state, volume: action.value };
    case UPDATE_PLAYBACK_POSITION:
      return { ...state, playbackPosition: action.value };
    default:
      return state;
  }
}
