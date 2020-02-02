import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore } from "@reduxjs/toolkit";
import { lazyLoading } from "./reducers";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { uploadRequestWatcherSaga } from "./effects/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: lazyLoading,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(uploadRequestWatcherSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
