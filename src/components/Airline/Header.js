import React from "react";
const Header = (props) => {
  console.log(props.imageUrl);
  //   const { name, image_url, avg_score } = props.attributes;
  //   console.log(name);
  return (
    <div className="wrapper">
      <h1>
        <img src={props.imageUrl}></img>
        {props.name}
      </h1>
      <div className="totalReviews"></div>
      <div className="starRating"></div>
      <div className="totalOutOf">{props.avgScore}</div>
    </div>
  );
};
export default Header;
