import React from "react";
import "./Weather.css";
export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurseday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.data.getDay()];
  let hours = props.data.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.data.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div id="time">
      {day} {hours} : {minutes}
    </div>
  );
}
