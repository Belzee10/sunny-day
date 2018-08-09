import React from "react";

const CurrentWeather = props => {
  const { temperature, weatherConditions } = props.currentWeather;
  let classes = "wi " + iconFormat(weatherConditions);

  return (
    <div className="weather-today">
      <span className="color-text">{Math.round(temperature)}˚</span>
      <i className={classes} />
    </div>
  );
};

function iconFormat(value) {
  switch (value) {
    case "Clouds":
      return "wi-cloudy weather-icon";
    case "Clear":
      return "wi-day-sunny weather-icon";
    case "Thunderstorm":
      return "wi-day-thunderstorm weather-icon";
    default:
      return;
  }
}

export default CurrentWeather;
