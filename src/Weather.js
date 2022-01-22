import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function getWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humadity: response.data.main.humidity,
      date: "wednesday",
      description: response.data.weather[0].description,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function search() {
    const apiKey = "3586082911a3bafc0ae4afd4377c0a7c";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric `;
    axios.get(apiUrl).then(getWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-md-8">
            <form>
              <div className="row">
                <div className="col-9">
                  <input
                    className="w-100"
                    type="search"
                    placeholder="type a city"
                  />
                </div>
                <div className="col-3">
                  <input className="w-100" type="submit" value="Search" />
                </div>
              </div>
            </form>
            <h2 className="city">{weatherData.city}</h2>
            <h1>{Math.round(weatherData.temperature)}</h1>
            <div className="row">
              <div className="col">
                <p>{weatherData.date}</p>
              </div>
              <div className="col">
                <p className="text-capitilize">{weatherData.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
              </div>
              <div className="col">
                <img src={weatherData.iconUrl} alt={weatherData.description} />
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex ">
            <ul className="forecast flex-row flex-md-column ">
              <li className="flex-column flex-md-row ">
                <span className="forecast-day">Tue</span>{" "}
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
                <span>18 / 12</span>
              </li>
              <li>
                {" "}
                <span className="forecast-day">Tue</span>{" "}
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
                <span>18 / 12</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
