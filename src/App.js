import React from "react";
import './App.css';
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <h1> Weather app</h1>
        <Weather/>
        
        <footer>
          {" "}
          This project created by Mona Nadi and is {""}
          <a
            href="https://github.com/luna87/react-weather-app"
            target="_blank"
            rel="noopener"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

 