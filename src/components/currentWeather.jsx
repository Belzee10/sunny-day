import React, { Component } from "react";

class CurrentWeather extends Component {
  state = {};
  render() {
    return (
      <div className="weather-today">
        <span className="color-text">19˚</span>
        <i className="wi wi-strong-wind weather-icon" />
      </div>
    );
  }
}

export default CurrentWeather;
