import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city} </h1>
      <ul className="date">
        <li>
          <FormattedDate data={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row justify">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            width={180}
            id="icon"
          />
          <strong id="defualt-degree">{props.data.temprature}°C</strong>
        </div>

        <div className="col-6">
          <ul className="info">
            <li>Humidity:{props.data.humidity}% </li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
