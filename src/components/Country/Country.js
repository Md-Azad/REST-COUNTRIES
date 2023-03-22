import React from "react";
import "./Country.css";

const Country = (props) => {
  //   console.log(props.country);
  //   Objecty destructuring
  const { name, region, population, area, flags } = props.country;
  return (
    <div className="country">
      {/* Without destructuring */}
      {/* <h3>Country Name: {props.country.name.common}</h3>
      <p>Region: {props.country.region}</p>
      <p>Population: {props.country.population}</p>
      <p>Area: {props.country.area}</p> */}

      {/* with destructuring */}
      <img src={flags.png} alt="" />
      <h3> {name.common}</h3>
      <p>Region: {region}</p>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;
