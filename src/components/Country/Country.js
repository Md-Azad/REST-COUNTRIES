import React from "react";

const Country = (props) => {
  return (
    <div>
      <h3>Country Name: {props.name}</h3>
      <p>Population: {props.population}</p>
      <p>Area: {props.area}</p>
    </div>
  );
};

export default Country;
