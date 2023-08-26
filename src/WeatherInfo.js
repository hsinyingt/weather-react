import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <FormattedDate date={props.data.date} />
      <div class="weatherIcon">
        <WeatherIcon code={props.data.icon} size={52} />
      </div>
      <div class="weatherDescription" id="weatherDescription">
        {props.data.description}
      </div>
      <div class="mainCity" id="searchCity">
        {props.data.city}
      </div>
      <WeatherTemperature celsius={props.data.temperature} />
      <div class="units">°C</div>

      <div class="humidityDisplay">Humidity: {props.data.humidity}%</div>
      <div class="windDisplay">Wind: {props.data.wind} m/h</div>
      <div class="weather-forecast" id="forecast"></div>
      <button class="btnCurrent" id="current-location-button">
        Weather in current location
      </button>
    </div>
  );
}
