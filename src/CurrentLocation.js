import React from "react";
import "./WeatherInfo.css";

export default function CurrentLocation() {
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  return (
    <button
      class="btnCurrent"
      id="current-location-button"
      onClick={getCurrentLocation}
    >
      Weather in current location
    </button>
  );
}
