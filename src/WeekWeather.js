import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeekWeather(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      return hours = `0${hours}:00`;
    } else {return `${hours}:00`;
  }
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