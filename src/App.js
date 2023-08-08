import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="Weather">
      <div class="container">
        <Weather defaultCity="Prague" />
        <div class="codeOwner">
          <a
            href="https://github.com/hsinyingt/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          {""}
          by Hsin-Ying Tsai
        </div>
      </div>
    </div>
  );
}
