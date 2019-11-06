import React from "react";
// import { action } from "@storybook/addon-actions";
import { combineReducers, createStore } from "redux";
import simpleReducer from "src/store/reducers/userReducer";
import { Provider } from "react-redux";
import UsersContainer from "src/Users/UsersContainer";

export default {
  title: "User Container"
};

const initialState = {
  searchStr: "",
  users: [
    {
      avatar_url: "https://github.com/twbs.png",
      html_url: "https://github.com",
      login: "Sample User"
    }
  ]
};

const reducers = {
  users: () => simpleReducer(initialState, {})
};

const store = createStore(combineReducers(reducers));

export const userContainer = () => (
  <Provider store={store}>
    <UsersContainer />
  </Provider>
);
