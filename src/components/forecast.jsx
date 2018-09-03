import React from "react";
import ForecastDay from "./forecastDay";

const Forecast = props => {
  return (
    <div className="forecast">
      <div className="row no-gutters">
        {props.forecastWeather.map((forecast, index) => (
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
};

export default Forecast;
