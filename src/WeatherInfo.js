import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="city">{props.data.city}</h2>

      <WeatherTemperature celsius={props.data.temperature} />

      <div className="row">
        <div className="col">
          <FormattedDate date={props.data.date} />
        </div>
        <div className="col">
          <p className="text-capitilize">{props.data.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col">
          <img src={props.data.iconUrl} alt={props.data.description} />
        </div>
      </div>
    </div>
  );
}
