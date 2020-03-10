import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import fileReducer from "./store/reducers/file-reducer";
import displayReducer from "./store/reducers/display-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './store/sagas/root-saga';

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

const rootReducer = combineReducers({
  fileReducer: fileReducer,
  displayReducer: displayReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run( rootSaga );
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
