import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

if (unit === "celcius") {
  return (
    <div className="WeatherTemperature">
      <h2>
      {props.celcius}{" "}
      <span className="units">
        °C |{" "}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </span>
      </h2>
    </div>
  );
} else {
  return (
    <div className="WeatherTemperature">
      <h2>
      {Math.round(fahrenheit())}{" "}
      <span className="units">
        <a href="/" onClick={showCelcius}>
          °C
        </a>{" "}
        | °F
      </span>
      </h2>
    </div>
  );
}
}
