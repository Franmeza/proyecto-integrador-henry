import React from "react";
//  import ReactDOM from 'react-dom'
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

// ReactDOM.render(
// <Provider store={store}>
// <BrowserRouter>
//     <App />
// </BrowserRouter>
//  </Provider>,
//   document.getElementById('root')
// )

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
