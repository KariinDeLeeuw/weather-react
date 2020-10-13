import React from "react";
// import axios from 'axios';
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Rotterdam",
    temperature: 20,
    imgURL: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
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
        <div className="currentweather">
          <div className="row">
            <div className="col">
              <p>Last updated:</p>
              <h3>Sunday</h3>
              <h3>15:12</h3>
            </div>
            <div className="col">
              <h2>
                {weatherData.temperature}
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </h2>
              <h2>
                <i className="fas fa-temperature-high"></i>
              </h2>
            </div>
            <div className="col">
              <p>Humidity: {weatherData.humidity}%</p>
              <p>Wind: {weatherData.wind}km/h</p>
            </div>
            <div className="col">
              <p>
                <img id="icon" src={weatherData.imgURL} alt="" />
              </p>
            </div>
          </div>
        </div>
        <div className="currentcity">
          <div className="row">
            <div className="col-3">
              <button id="location">Your location</button>
            </div>
            <div className="col-5"></div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
      <footer>
        <p>
          <a
            href="https://github.com/KariinDeLeeuw/wheater-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          by Karin de Leeuw
        </p>
      </footer>
    </div>
  );
}
