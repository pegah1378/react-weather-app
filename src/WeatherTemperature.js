import React, { useState } from "react";
import "./Weather.css";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong id="defualt-degree">
          {props.celsius}
          <span>
            °<sup>C |</sup>°
            <sup>
              <a href="/" onClick={showFahrenheit}>
                F
              </a>
            </sup>
          </span>
        </strong>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <strong id="defualt-degree">
          {Math.round(fahrenheit)}
          <span>
            °
            <sup>
              <a href="/" onClick={showCelsius}>
                C
              </a>{" "}
              |
            </sup>
            °<sup>F</sup>
          </span>
        </strong>
      </div>
    );
  }
}
