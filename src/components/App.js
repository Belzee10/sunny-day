import React, { Component } from "react";
import CurrentDate from "./currentDate";
import CurrentWeather from "./currentWeather";
import Choice from "./choice";
import Forecast from "./forecast";
import ImageCover from "./imageCover";
import axios from "axios";

const Api_KEY = "5568bcd46c38ce550618db1995308e5e";

class App extends Component {
  state = {
    currentWeather: {
      temperature: 0,
      weatherConditions: ""
    },
    cities: [
      { id: "6359304", name: "Madrid", country: "Spain" },
      { id: "6356055", name: "Barcelona", country: "Spain" },
      { id: "3553478", name: "Havana", country: "Cuba" },
      { id: "6167865", name: "Toronto", country: "Canada" },
      { id: "2643123", name: "Manchester", country: "GB" },
      { id: "3435910", name: "Buenos Aires", country: "Argentina" },
      { id: "2950158", name: "Berlin", country: "Germany" },
      { id: "6094817", name: "Ottawa", country: "Canada" },
      { id: "3544091", name: "Pinar del Rio", country: "Cuba" }
    ],
    citySelected: "3553478",
    theme: ""
  };

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

  componentDidMount() {
    this.getCurrentWeather(this.state.citySelected);
  }

  handleChange = value => {
    this.setState({
      citySelected: value
    });
    this.getCurrentWeather(value);
  };

  handleTheme() {
    const { temperature } = this.state.currentWeather;
    let theme,
      gradient = "";
    if (temperature >= 14 && temperature < 28) {
      theme = "green";
      gradient = "linear-gradient(-90deg, #b4cbbc, #f0e7d1)";
    } else if (temperature < 14) {
      theme = "blue";
      gradient = "linear-gradient(-90deg, #2a3d66, #6f86af)";
    } else if (temperature >= 28) {
      theme = "orange";
      gradient = "linear-gradient(-90deg, #ED9E36, rgb(231, 206, 62))";
    }
    document.body.style.background = gradient;

    this.setState({
      theme
    });
  }

  getCurrentWeather(cityId) {
    axios
      .get(
        // `https://api.openweathermap.org/data/2.5/forecast?q=Havana,cu&units=metric&appid=${Api_KEY}`//Forecast
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${Api_KEY}`
      )
      .then(response => {
        const data = {
          temperature: response.data.main.temp,
          weatherConditions: response.data.weather[0].main
        };
        this.setState({
          currentWeather: data
        });
        this.handleTheme();
        console.log(this.state.currentWeather, cityId);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col card-container">
            <div className="card">
              <div className={"card-body " + this.state.theme}>
                <div className="row no-gutters">
                  <div className="col-lg-8 p-5">
                    <div className="row no-gutters">
                      <div className="col">
                        <CurrentDate date={this.getDate()} />
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <CurrentWeather
                          currentWeather={this.state.currentWeather}
                        />
                      </div>
                      <div className="col-md-6">
                        <Choice
                          onChange={this.handleChange}
                          cities={this.state.cities}
                          citySelected={this.state.citySelected}
                        />
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col">
                        <Forecast />
                      </div>
                    </div>
                  </div>
                  <ImageCover theme={this.state.theme} />
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
