import React from "react";

const Choice = props => {
  function handleChange(event) {
    props.onChange(event.target.value);
  }
  return (
    <div className="choice">
      <h5>City:</h5>
      <select
        value={props.citySelected}
        onChange={handleChange}
        name="city"
        id="city"
        className="form-control"
      >
        {props.cities.map(city => (
          <option key={city.id} value={city.id}>
            {city.name}, {city.country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Choice;
