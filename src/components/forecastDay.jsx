import React from "react";
import IconWeather from "./iconWeather";
import WeekDay from "./weekDay";

const forecastDay = props => {
  function handleHover() {
    console.log("hovered");
  }
  let classes =
    props.index === 0 ? "col-sm text-center active" : "col-sm text-center";
  return (
    <div className={classes} onMouseEnter={handleHover}>
      <WeekDay weekDay={props.date[0]} />
      <IconWeather weatherConditions={props.weatherConditions} />
      <span>{Math.round(props.temperature)}˚</span>
    </div>
  );
};

export default forecastDay;
