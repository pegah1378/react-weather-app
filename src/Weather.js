import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temprature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: "Saturday 11:00",
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl:
        "https://bmcdn.nl/assets/weather-icons/v2.1/fill/partly-cloudy-day.svg",
    });
    console.log(response.data);
  }
  if (weatherData.ready) {
    return (
      <div className="container" id="all">
        <div className="weather">
          <form>
            <input
              type="submit"
              value="search"
              className="btn btn-success"
              id="search-btn"
            />
            <input type="search" placeholder="Enter a city" id="box" />
          </form>
          <h1 className="city">{weatherData.city} </h1>
          <ul className="date">
            <li>{weatherData.date}</li>
            <li class="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row justify">
            <div className="col-6">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                width={180}
                id="icon"
              />
              <strong id="defualt-degree">{weatherData.temprature}°C</strong>
            </div>

            <div className="col-6">
              <ul className="info">
                <li>Humidity:{weatherData.humidity}% </li>
                <li>Wind: {weatherData.wind} m/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9ea936a09a35e656c9c6abae603a0dd5";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defualtCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading";
  }
}
