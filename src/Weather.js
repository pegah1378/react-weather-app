import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temprature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl:
        "https://bmcdn.nl/assets/weather-icons/v2.1/fill/partly-cloudy-day.svg",
    });
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "9ea936a09a35e656c9c6abae603a0dd5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container" id="all">
        <div className="weather">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
              <input
                type="search"
                placeholder="Enter a city"
                id="box"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "loading";
  }
}
