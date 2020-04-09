import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import todoApp from "./Reducers";
import { Provider } from "react-redux";
import stylesheets from "bootstrap";

const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
    {console.log("App-component called!")}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
