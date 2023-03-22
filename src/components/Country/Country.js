import React from "react";
import "./Country.css";

const Country = (props) => {
  console.log(props.country);
  return (
    <div className="country">
      <h3>Country Name: {props.country.name.common}</h3>
      <p>Region: {props.country.region}</p>
      <p>Population: {props.country.population}</p>
      <p>Area: {props.country.area}</p>
    </div>
  );
};

export default Country;
