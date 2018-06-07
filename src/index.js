import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import theme from "./theme";
import App from "./App";
import "./globalStyles";
import configureStore from "./configureStore";

const store = configureStore();

const Root = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

render(<Root />, document.getElementById("root"));
