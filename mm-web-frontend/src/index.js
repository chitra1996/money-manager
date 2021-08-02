import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import MoneyManager from "./screens";
import { reducer } from "./redux/reducers/reducer";
import { loggingInUser, creatingExpense } from "./redux/sagas/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(loggingInUser);
sagaMiddleware.run(creatingExpense);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MoneyManager />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
