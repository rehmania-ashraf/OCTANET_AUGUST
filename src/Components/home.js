import React, { Component, useState } from "react";
import Navbar from "./navBar"
import BannerBackground from "../Assets/home-banner-background.jpg";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
        <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           "Your health, delivered with trusted care."
          </h1>
          <p className="primary-text">
            Experience the top-quality medications, sourced from trusted manufacturers, ensuring safety, efficacy, and peace of mind every time.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;