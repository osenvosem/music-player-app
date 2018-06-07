import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";

import AppCanvas from "./components/AppCanvas";
import TopDecElem from "./components/TopDecElem";
import Search from "./containers/SearchContainer";
import Playlist from "./containers/PlaylistContainer";
import Player from "./containers/PlayerContainer";
import ControlPanel from "./containers/ControlPanelContainer";

class App extends Component {
  render() {
    return (
      <AppCanvas>
        <TopDecElem />
        <Search />
        <Playlist />
        <ControlPanel />
        <Player />
      </AppCanvas>
    );
  }
}

export default hot(module)(App);
