import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="containter">
        <h1>Weather App</h1>
        <Weather
          defaultCity="Paris
      "
        />
        <footer>
          This project was coded by Saba Rahrotaban and is{" "}
          <a href="https://nervous-haibt-37ab66.netlify.app/" target="_blank">
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
