import React from "react";
import IconWeather from "./iconWeather";

const CurrentWeather = props => {
  const { temperature, weatherConditions } = props.currentWeather;

  return (
    <div className="weather-today">
      <span className="color-text">{Math.round(temperature)}˚</span>
      <IconWeather weatherConditions={weatherConditions} />
    </div>
  );
};

export default CurrentWeather;
