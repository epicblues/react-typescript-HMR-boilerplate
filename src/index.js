import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import css from "./style/index";

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
