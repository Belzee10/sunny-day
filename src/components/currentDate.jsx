import React from "react";

const CurrentDate = () => {
  function getDate() {
    const date = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return {
      day: function() {
        return (
          days[date.getDay()] +
          " " +
          (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
        );
      },
      month: function() {
        return months[date.getMonth()];
      }
    };
  }
  return (
    <div className="date">
      <h3>{getDate().day()}</h3>
      <h3>{getDate().month()}</h3>
    </div>
  );
};

export default CurrentDate;
