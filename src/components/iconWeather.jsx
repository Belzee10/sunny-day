import React, { Component } from "react";

class IconWeather extends Component {
  render() {
    let classes =
      "wi " + this.iconFormat(this.props.weatherConditions) + " weather-icon";

    return <i className={classes} />;
  }

  iconFormat(value) {
    switch (value) {
      case "Clouds":
        return "wi-cloudy";
      case "Clear":
        return "wi-day-sunny";
      case "Thunderstorm":
        return "wi-day-thunderstorm";
      case "Drizzle":
        return "wi-rain-mix";
      case "Rain":
        return "wi-rain";
      case "Snow":
        return "wi-snow";
      default:
        return;
    }
  }
}

export default IconWeather;
