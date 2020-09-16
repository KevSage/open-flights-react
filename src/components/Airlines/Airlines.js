import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Airline from "./Airline";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
const Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1 {
    font-size: 42px;
  }
`;
const Subheader = styled.div;
const Grid = styled.div;
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
  const grid = airlines.map((item) => {
    return (
      <Airline
        key={item.attributes.name}
        attributes={item.attributes}
      ></Airline>
    );
  });
  return (
    <Fragment>
      <Home>
        <Header>
          <h1>Open Flights</h1>
          <div className="subheader">Honest, unbiased airline reviews</div>
        </Header>
        <div className="grid">
          <ul>{grid}</ul>
        </div>
      </Home>
    </Fragment>
  );
};
export default Airlines;
