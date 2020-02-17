import React from "react";
import ReactDom from "react-dom";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import reducers from "./reducers";
import "bootstrap/dist/css/bootstrap.css";

ReactDom.render(
  <Provider store={createStore(reducers, applyMiddleware(reduxThunk))}>
    <App></App>
  </Provider>,
  document.querySelector("#root")
);
