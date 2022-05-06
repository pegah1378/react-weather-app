import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city} </h1>
      <ul className="date">
        <li>
          <FormattedDate data={props.data.date} />
        </li>
        <li className="text-capitalize" id="des">
          {props.data.description}
        </li>
      </ul>
      <div className="row justify">
        <div className="col-6">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
            <WeatherTemperature celsius={props.data.temprature} />
          </div>
          <br />
          <br />
        </div>

        <div className="col-6">
          <ul className="info">
            <li>Humidity:{props.data.humidity}% </li>
            <li>Wind: {props.data.wind} km/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
