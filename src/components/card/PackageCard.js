import React from "react";
import "./packageCard.css";
import { Images } from "../../constants";

const PackageCard = () => {
  return <div className="packageCard">
      <img src={Images.firecamp} alt="firecamp"/>

      <div className="title">
        <h4>Fun Ride</h4>
        <h4>⭐ 5.0</h4>
      </div>

      <h4 className="details">One day trip that covers most of the places in araku</h4>
      <h4>Araku (Pick-up), Borra caves, Tribal...</h4>
      <div id="line"></div>
      <h4>One day - One night</h4>
      
  </div>;
};

export default PackageCard;

