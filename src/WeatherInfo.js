import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="city">{props.data.city}</h2>
      <span className="temperature">
        {Math.round(props.data.temperature)}
        <span className="unit">℃</span>
      </span>
      <div className="row pt-2">
        <div className="col">
          <FormattedDate date={props.data.date} />
        </div>
        <div className="col">
          <p className="text-capitilize">{props.data.description}</p>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col opacity-75">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
      </div>
    </div>
  );
}
