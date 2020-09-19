import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `http://localhost:3000/api/v1/airlines/${slug}`;
    axios
      .get(url)
      .then((resp) => setAirline(resp.data.data.attributes))
      .then(setLoaded(true))
      .catch((resp) => console.log(resp));
  }, []);
  console.log(airline.image_url);
  return (
    <div>
      <div className="wrapper">
        <div className="column">
          {loaded && (
            <Header
              attributes={airline}
              name={airline.name}
              imageUrl={airline.image_url}
              avgScore={airline.avg_score}
            ></Header>
          )}
          <div className="reviews"></div>
        </div>
        <div className="column">
          <div className="review-form">Review Form goes here</div>
        </div>
      </div>
    </div>
  );
};
export default Airline;
