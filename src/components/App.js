import React, { Component } from "react";
import CurrentDate from "./currentDate";
import CurrentWeather from "./currentWeather";
import Choice from "./choice";
import Forecast from "./forecast";
import axios from "axios";

const Api_KEY = "5568bcd46c38ce550618db1995308e5e";

class App extends Component {
  state = {};

  getDate() {
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
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const dayWeek = days[date.getDay()];
    const month = months[date.getMonth()];

    const now = {
      day: day,
      month: month,
      dayWeek: dayWeek
    };
    return now;
  }

  getWeather() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Havana,cu&units=metric&appid=${Api_KEY}`
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col card-container">
            <div className="card">
              <div className="card-body green">
                <div className="row no-gutters">
                  <div className="col-lg-8 p-5">
                    <div className="row no-gutters">
                      <div className="col">
                        <button onClick={this.getWeather} className="btn">
                          GET
                        </button>
                        <CurrentDate date={this.getDate()} />
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <CurrentWeather />
                      </div>
                      <div className="col-md-6">
                        <Choice />
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col">
                        <Forecast />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 cover">
                    <div className="mask" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
