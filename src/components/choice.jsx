import React, { Component } from "react";
class Choice extends Component {
  state = {};

  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div className="choice">
        <h5>City:</h5>
        <select
          value={this.props.citySelected}
          onChange={this.handleChange}
          name="city"
          id="city"
          className="form-control"
        >
          {this.props.cities.map(city => (
            <option key={city.id} value={city.id}>
              {city.name}, {city.country}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Choice;
