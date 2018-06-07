import { takeLatest, call, put } from "redux-saga/effects";

import * as API from "./services/api";
import { FETCH_PLAYLIST_REQUESTED } from "./actions";
import { fetchPlaylistSucceeded, fetchPlaylistFailed } from "./actionCreators";

export function* fetchPlaylist(url) {
  try {
    const playlist = yield call(API.fetchPlaylist, url);
    yield put(fetchPlaylistSucceeded(playlist));
  } catch (error) {
    yield put(fetchPlaylistFailed(playlist));
  }
}

export default function* watchFetchPlaylist() {
  yield takeLatest(FETCH_PLAYLIST_REQUESTED, fetchPlaylist);
}
