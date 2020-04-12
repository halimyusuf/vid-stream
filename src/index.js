import React from "react";
import { Router } from "react-router-dom";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import App from "./App";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import reducers from "./reducers";
import history from "./history";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
// eslint-disable-next-line react/react-in-jsx-scope
ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
