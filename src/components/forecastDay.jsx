import React from "react";
import IconWeather from "./iconWeather";
import WeekDay from "./weekDay";

const forecastDay = props => {
  let classes =
    props.index === 0 ? "col-sm text-center active" : "col-sm text-center";
  return (
    <div className={classes}>
      <WeekDay weekDay={props.date[0]} />
      <IconWeather weatherConditions={props.weatherConditions} />
      <span>{Math.round(props.temperature)}˚</span>
    </div>
  );
};

export default forecastDay;
