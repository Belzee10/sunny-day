import React from "react";

const IconWeather = props => {
  function iconFormat() {
    switch (props.weatherConditions) {
      case "Clouds":
        return "wi-cloudy";
      case "Clear":
        return "wi-day-sunny";
      case "Thunderstorm":
        return "wi-day-thunderstorm";
      case "Drizzle":
        return "wi-rain-mix";
      case "Rain":
        return "wi-rain";
      case "Snow":
        return "wi-snow";
      default:
        return;
    }
  }
  let classes = `wi ${iconFormat()} weather-icon`;
  return <i className={classes} />;
};

export default IconWeather;
