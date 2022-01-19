import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      Weather App
      <Weather />
      <footer>
        This project was coded by Saba Rahrotaban and is{" "}
        <a href="https://nervous-haibt-37ab66.netlify.app/" target="_blank">
          open-sourced on Github.
        </a>
      </footer>
    </div>
  );
}

export default App;
