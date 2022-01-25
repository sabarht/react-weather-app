import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="containter">
        <header>Weather App</header>
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by Saba Rahrotaban and is{" "}
          <a
            href="https://github.com/sabarht/react-weather-app"
            target="_blank"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
