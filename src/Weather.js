import React, { useState } from "react";
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      imgURL: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
    })
  }

function search(){
//Making the Api call here
const apiKey = "b8b67f25aca36174d7cefe6d6e1ff8be";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

function handleCityChange(event) {
  setCity(event.target.value);
}

  if (weatherData.ready) {
      return (
        <div className="Weather">
          <div className="container">
            <div className="row">
              <div className="col">
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <WeatherInfo data={weatherData}/>
        </div>
        
        <footer>
        <p>
        <a
          href="https://github.com/KariinDeLeeuw/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code{" "}
        </a>
        by Karin de Leeuw
        </p>
        </footer>
        </div>
      );
  } else {
    search();
    return "Loading...";
  }
}
