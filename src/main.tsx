import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { registerTattvakoshaWebMcp } from "./lib/webmcp";
import "./styles/index.css";

registerTattvakoshaWebMcp();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
