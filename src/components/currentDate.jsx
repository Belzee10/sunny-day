import React from "react";

const CurrentDate = props => {
  return (
    <div className="date">
      <h3>{props.date.day()}</h3>
      <h3>{props.date.month()}</h3>
    </div>
  );
};

export default CurrentDate;
