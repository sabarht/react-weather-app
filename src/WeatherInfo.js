import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="city">{props.data.city}</h2>
      <h1>{Math.round(props.data.temperature)}</h1>
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
