import React from "react";

const Day = props => {
  const spanStyle = {
    paddingLeft: "1rem"
  };
  return (
    <span style={spanStyle}>
      {props.day < 10 ? "0" + props.day : props.day}
    </span>
  );
};

export default Day;
