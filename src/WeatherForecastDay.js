import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()} </div>
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="Weatherprops.data-temperature-min" id="tem">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
