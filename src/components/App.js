import React, { Component } from "react";
import CurrentDate from "./currentDate";
import CurrentWeather from "./currentWeather";
import Choice from "./choice";
import Forecast from "./forecast";
import ImageCover from "./imageCover";
import Cities from "./cities";
import axios from "axios";
import { css } from "react-emotion";
import { ClipLoader } from "react-spinners";

const Api_KEY = "5568bcd46c38ce550618db1995308e5e";

class App extends Component {
  state = {
    loading: true,
    loadingForecast: true,
    cityCode: "3553478", //Havana by default
    currentWeather: {
      temperature: 0,
      weatherConditions: "",
      date: ""
    },
    forecastWeather: [],
    theme: ""
  };

  componentDidMount() {
    this.getCurrentWeather(this.state.cityCode);
    this.getForecastWeather(this.state.cityCode);
  }

  handleForecast(data) {
    const forecastWeather = [];
    //loop through the data of forecast to get the days(+5 days)
    for (let index = 6; index < data.length; index += 8) {
      const weatherDay = {
        temperature: data[index].main.temp,
        weatherConditions: data[index].weather[0].main,
        date: this.handleDate(data[index].dt_txt)
      };
      forecastWeather.push(weatherDay);
    }
    forecastWeather.unshift(this.state.currentWeather);
    return forecastWeather;
  }

  handleDate(dateString) {
    const date = new Date(dateString).toString().split(" ");
    return date;
  }

  handleChange = city => {
    this.setState({
      cityCode: city,
      loading: true,
      loadingForecast: true
    });
    this.getCurrentWeather(city);
    this.getForecastWeather(city);
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
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${Api_KEY}`
      )
      .then(response => {
        const currentWeather = {
          temperature: response.data.main.temp,
          weatherConditions: response.data.weather[0].main,
          date: this.handleDate(new Date())
        };
        this.setState({
          currentWeather,
          loading: false
        });
        this.handleTheme();
      })
      .catch(error => {
        console.log(error);
      });
  }

  getForecastWeather(cityId) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${Api_KEY}`
      )
      .then(response => {
        const forecastWeather = this.handleForecast(response.data.list);
        this.setState({
          forecastWeather,
          loadingForecast: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const override = css`
      position: absolute;
      top: 5px;
      left: 5px;
    `;
    return (
      <div className="container">
        <div className="row">
          <div className="col card-container">
            <div className="card">
              {this.state.loading &&
                this.state.loadingForecast && (
                  <ClipLoader
                    className={override}
                    sizeUnit={"px"}
                    size={20}
                    color={"#424950"}
                    loading={this.state.loading}
                  />
                )}

              <div className={"card-body " + this.state.theme}>
                <div className="row no-gutters">
                  <div className="col-lg-8 p-5">
                    <div className="row no-gutters">
                      <div className="col">
                        <CurrentDate date={this.handleDate(new Date())} />
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
                          cities={Cities}
                          citySelected={this.state.cityCode}
                        />
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col">
                        <Forecast
                          forecastWeather={this.state.forecastWeather}
                        />
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
