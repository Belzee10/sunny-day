import React, { Component } from "react";

class Day extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm text-center">
        <span>MON</span>
        <i className="wi wi-night-alt-sleet weather-icon" />
        <span>13˚</span>
      </div>
    );
  }
}

export default Day;
