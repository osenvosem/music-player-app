import { createSelector } from "reselect";

const getPlaylist = state => state.playlist;
const getCurrentSongId = state => state.currentSongId;

export const getCurrentSong = createSelector(
  [getPlaylist, getCurrentSongId],
  (playlist, id) => playlist.find(song => song.id === id)
);

const getSearchTerm = state => state.searchTerm;

export const getFilteredPlaylist = createSelector(
  [getPlaylist, getSearchTerm],
  (playlist, term) => {
    if (term.length < 3) return playlist;
    const test = str => new RegExp(term, "i").test(str);
    return playlist.filter(song => test(song.song) || test(song.artist));
  }
);
