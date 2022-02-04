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
    <div className="d-flex flex-row py-2">
      <div className="forecast-day p-2">{day()}</div>
      <div className="icon">
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
      <div className="align-middle text-center p-2">
        <span>{maxTemperature()}°</span>
        <span>/{minTemperature()}°</span>
      </div>
    </div>
  );
}
