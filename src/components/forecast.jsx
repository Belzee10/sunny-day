import React, { Component } from "react";
import ForecastDay from "./forecastDay";

class Forecast extends Component {
  state = {};
  render() {
    return (
      <div className="forecast">
        <div className="row no-gutters">
          {this.props.forecastWeather.map((forecast, index) => (
            <ForecastDay
              temperature={forecast.temperature}
              weatherConditions={forecast.weatherConditions}
              date={forecast.date}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Forecast;
