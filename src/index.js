import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Attach App to the root div in public/index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
