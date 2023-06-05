import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    
    setWeatherData({
      ready: true,
      
      humidity: response.data.temperature.humidity,
      coordinates: response.data.coordinates,
     
      // temp: Math.round(response.data.main.temp),
      temperature: response.data.temperature.current,
      //date: new Date(response.data.dt * 1000),
      time: new Date(response.data.time),
      
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      
      city: response.data.city,
      icon_url: response.data.condition.icon_url,
    });
   
  }
  function search() {
    //const apiKey = "2030de72409530d629eb62abf6b08948";
    const apiKey = "e30f73b3544toc0d6faf9afc4179ef7e";
    //const apiKey = "06fa5f0c173ae8o9ctd4134fb2530e34";
    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control "
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary text-bg-secondary text-bg-info w-100"
                autoFocus="on"
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "loading..";
  }
}
