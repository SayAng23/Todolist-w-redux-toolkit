import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "./index.css";

//kini ang provider para maka connect ta sa mga variable didto sa store
ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById("root")
);
