import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-8">
          <form className="w-75">
            <input type="search" placeholder="type a city" />

            <input type="submit" value="Search" />
          </form>

          <h2>Tehran, Iran</h2>
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
        <div className="col-4">
          <ul className="forecast">
            <li>
              {" "}
              <span className="forecast-day">Tue</span>{" "}
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png
"
              />{" "}
              <span>18</span>
              <img />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
