import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Search from "./Search";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <Search />
    <a href="https://github.com/hsinyingt/weather-react">
      GitHub open-source project
    </a>
  </React.StrictMode>
);
