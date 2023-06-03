import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
   "mist-day": "FOG",
    "mist-night": "FOG", 
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "thunderstorm-day": "SLEET",
    "thunderstorm-night": "SLEET", 
    "rain-day": "RAIN", 
    "rain-night": "RAIN",
    "shower-rain-day": "RAIN", 
    "shower-rain-night": "RAIN",
   "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
   "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "clear-sky-day": "CLEAR_DAY", 
   "clear-sky-night": "CLEAR_NIGHT",
   "scattered-clouds-day": "CLOUDY", 
    "scattered-clouds-night": "CLOUDY", 
  };
 

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="black"
      size={props.size}
      animate={true}
    />
  );
}
