import WeatherIcon from "./WeatherIcon";

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
    <div
      className="d-flex py-2 justify-content-between
    "
    >
      <div className="forecast-day padding-md">{day()}</div>
      <div className="icon ">
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
      <div className="padding-md daily-temp">
        <span>{maxTemperature()}°</span>
        <span>/{minTemperature()}°</span>
      </div>
    </div>
  );
}
