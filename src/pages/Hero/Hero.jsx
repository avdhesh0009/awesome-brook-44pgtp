import React, { useState } from "react";
import cover from "../../images/model2.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="App">
      <div className="leftPartition">
        <div className="left-text">
          <p className="description">
            Transform your look with the latest in street <br />
            fashion. Urban vibes, unstoppable trends.
          </p>
          <button className="actionButton">SHOP NOW</button>
        </div>
      </div>
      <div className="rightPartition"></div>
      <div className="model-img">
        <img src={cover} />
      </div>
      <div className="logo-written">
        <span className="logoText">SARSACHIC</span>
      </div>
    </div>
  );
};

export default Hero;
