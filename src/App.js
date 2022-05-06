import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <br />

        <footer>
          This project was coded by{" "}
          <a href="mailto:pegah1251@gmail.com" target="_blank">
            Pegah Moradpour
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/pegah1378/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://weather-app-by-pegah.netlify.app/" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
