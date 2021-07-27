import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

// mount function
function mount(el) {
  ReactDOM.render(<App />, el);
}

// dev (isolation) mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// through container, export mount
export { mount };
