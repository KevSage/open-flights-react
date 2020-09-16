import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
const Airlines = () => {
  const [airlines, setAirlines] = useState([]);
  useEffect(() => {
    //Get all of our airlines from the api
    //Update airines in our state
    axios
      .get("http://localhost:3000/api/v1/airlines.json")
      .then((resp) => setAirlines(resp.data.data))
      .catch((resp) => console.log(resp));
  }, [airlines.length]);
  const list = airlines.map((item) => {
    return <li key={item.attributes.name}>{item.attributes.name}</li>;
  });
  return (
    <Fragment>
      <div className="header">
        <h1>Open Flights</h1>
        <div className="subheader">Honest, unbiased airline reviews</div>
      </div>
      <div className="grid">
        <ul>{list}</ul>
      </div>
    </Fragment>
  );
};
export default Airlines;
