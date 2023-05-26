import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="tokyo" />

        <footer>
          {" "}
          This project created by <strong> Mona Nadi </strong> and is {""}
          <a
            href="https://github.com/luna87/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
