import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux/store";

import "./assets/styles/global.scss";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root not found. Run the app with npm start.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);