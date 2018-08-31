import React from "react";
import Day from "./day";
import WeekDay from "./weekDay";
import Month from "./month";

const CurrentDate = props => {
  return (
    <div className="date">
      <WeekDay weekDay={props.date[0]} />
      <Day day={props.date[2]} />
      <Month month={props.date[1]} />
    </div>
  );
};

export default CurrentDate;
