import React, { useState } from "react";
import axios from 'axios';
import WeekWeather from "./WeekWeather";
import 'bootstrap/dist/css/bootstrap.css';

export default function WeatherForecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast, setforecast] = useState(null);
  
  function handleForecastResponse(response) {
    setforecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeekWeather row">
        <WeekWeather data={forecast.list[0]} />
        <WeekWeather data={forecast.list[1]} />
        <WeekWeather data={forecast.list[2]} />
        <WeekWeather data={forecast.list[3]} />
        <WeekWeather data={forecast.list[4]} />
        <WeekWeather data={forecast.list[5]} />
      </div>
    );
  } else {
    const apiKey = "b8b67f25aca36174d7cefe6d6e1ff8be";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return props.city;
  }
}