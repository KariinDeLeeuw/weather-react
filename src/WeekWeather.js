import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeekWeather(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  return (
    <div className="WeekWeather col-2">
      <div className="Forcast">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
      </div>
    </div>
  );
}