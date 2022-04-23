import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="container" id="all">
      <div className="weather">
        <form>
          <input type="search" placeholder="Enter a city" />

          <input
            type="submit"
            value="search"
            className="btn btn-success"
            id="search-btn"
          />
        </form>
        <h1 className="city">London </h1>
        <ul className="date">
          <li>Saturday 11:00</li>
          <li>Partly cloudy</li>
        </ul>
        <div className="row justify">
          <div className="col-6">
            <img
              src="https://bmcdn.nl/assets/weather-icons/v2.1/fill/partly-cloudy-day.svg"
              alt="Partly-cloudy"
              width={180}
              id="icon"
            />
            <strong>14°C</strong>
          </div>

          <div className="col-6">
            <ul className="info">
              <li>Precipitation: 0% </li>
              <li>Humidity: 64% </li>
              <li>Wind: 5 m/s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
