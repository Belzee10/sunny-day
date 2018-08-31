import React from "react";

const Month = props => {
  const spanStyle = {
    display: "block"
  };
  return <span style={spanStyle}>{props.month}</span>;
};

export default Month;
