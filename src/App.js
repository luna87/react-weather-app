import React from "react";
import "./App.css";
import Weather from "./Weather.js";
import bg2 from "./Videos/bg2.mp4";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <video
          className="bgVideo"
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            objectFit: "cover",
            overflow: "hidden",
            display: "flex",
            fontFamily: "sans-serif",
            zIndex: "-1",
          }}
        >
          <source src={bg2} type="video/mp4" />
        </video>
        <h1 className="text-center">React Weather App</h1>

        <Weather defaultCity="Tehran" />

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
          and
          <a
            href="https://symphonious-crumble-0267c8.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
