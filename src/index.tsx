import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import UsersContainer from "./Users/UsersContainer";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./store/config/store";

ReactDOM.render(
  <Provider store={configureStore()}>
    <UsersContainer />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
