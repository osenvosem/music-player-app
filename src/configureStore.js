import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import rootReducer from "./reducers";

const defaultState = {
  playlist: [],
  currentSongId: null,
  playbackState: false,
  volume: 100,
  searchTerm: "",
  playbackPosition: 0,
  error: null,
  requestInProgress: false
};

export default function configureStore() {
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  enhancers.push(applyMiddleware(sagaMiddleware));

  if (
    process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(rootReducer, defaultState, compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
}
