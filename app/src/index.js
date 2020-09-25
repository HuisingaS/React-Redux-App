import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);