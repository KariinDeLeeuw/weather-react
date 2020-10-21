import React from "react";
import FormattedDate from "./FormattedDate";
import city from "./images/city.png";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
  <div className="WeatherInfo">  
       <div className="currentweather">
<div className="row">
  <div className="col">
    <p>Last updated:</p>
    <h3>
    <FormattedDate date={props.data.date} />
    </h3>
  </div>
  <div className="col">
    <WeatherTemperature celcius={props.data.temperature} />
    <h2>
      <i className="fas fa-temperature-high"></i>
    </h2>
  </div>
  <div className="col">
    <p className="text-capitalize">{props.data.description}</p>
    <p>Humidity: {props.data.humidity}%</p>
    <p>Wind: {props.data.wind} km/h</p>
  </div>
  <div className="col">
    <WeatherIcon code={props.data.icon} />
  </div>
</div>
</div>
<div className="currentcity">
<div className="row">
  <div className="col-3">
    <button id="location">Your location</button>
  </div>
  <div className="col-5" id="currentCity"><h1>{props.data.city}</h1></div>
          <div className="col-4">
            <img src={city}  alt="Urban city" />
          </div>
</div>
</div>
</div>
);
}