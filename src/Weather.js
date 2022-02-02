import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function getWeather(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lat,
    });
  }

  function search() {
    const apiKey = "3586082911a3bafc0ae4afd4377c0a7c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `;
    axios.get(apiUrl).then(getWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    onChange={handleCity}
                    className="w-100 ps-2"
                    type="search"
                    placeholder="type a city"
                  />
                </div>
                <div className="col-3">
                  <input className="w-100" type="submit" value="Search" />
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
          </div>

          <div className="col-md-4">
            <WeatherForecast lon={weatherData.lon} lat={weatherData.lat} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
