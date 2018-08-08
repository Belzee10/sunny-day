import React, { Component } from "react";

class Choice extends Component {
  state = {};
  render() {
    return (
      <div className="choice">
        <h5>City:</h5>
        <select name="city" id="city" className="form-control">
          <option value="">Havana</option>
          <option value="">Havana</option>
          <option value="">Havana</option>
          <option value="">Havana</option>
        </select>
      </div>
    );
  }
}

export default Choice;
