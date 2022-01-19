import "./Weather.css";
export default function Weather() {
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
          <h2 className="city">Tehran, Iran</h2>
          <h1>23</h1>
          <div className="row">
            <div className="col">
              <p>Wednesday 01:00</p>
            </div>
            <div className="col">
              <p>Clear with periodic clouds</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul>
                <li>Humidity: 45%</li>
                <li>Wind: 0 km/h</li>
              </ul>
            </div>
            <div className="col">
              <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <ul className="forecast d-flex flex-row flex-md-column ">
            <div className="d-flex">
              <li className="flex-column flex-md-row">
                {" "}
                <span className="forecast-day">Tue</span>{" "}
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png
"
                />
                <span>18 / 12</span>
              </li>
              <li className="flex-column flex-md-row">
                {" "}
                <span className="forecast-day">Tue</span>{" "}
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png
"
                />
                <span>18 / 12</span>
              </li>
              <li className="flex-column flex-md-row">
                {" "}
                <span className="forecast-day">Tue</span>{" "}
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png
"
                />
                <span>18 / 12</span>
              </li>
              <li className="flex-column flex-md-row">
                {" "}
                <span className="forecast-day">Tue</span>{" "}
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png
"
                />
                <span>18 / 12</span>
              </li>
              <li>
                {" "}
                <span className="forecast-day">Tue</span>{" "}
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png
"
                />
                <span>18 / 12</span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
