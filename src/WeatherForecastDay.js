export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return temperature;
  }
  return (
    <div>
      <div className="forecast-day align-middle text-center">{day()}</div>
      <div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
          alt="weather-icon"
        />
      </div>
      <div className="align-middle text-center">
        <span>{maxTemperature()} </span>
        <span>/{minTemperature()}</span>
      </div>
    </div>
  );
}
