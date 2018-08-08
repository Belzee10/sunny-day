import React, { Component } from "react";
import Day from "./day";

class Forecast extends Component {
  state = {};
  render() {
    return (
      <div className="forecast">
        <div className="row no-gutters">
          <Day />
        </div>
      </div>
    );
  }
}

export default Forecast;
