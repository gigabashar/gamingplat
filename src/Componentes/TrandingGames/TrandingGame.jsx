import React from "react";
import { HiFire } from "react-icons/hi";
import "./TrandingGame.css";

const TrandingGame = ({ image, followers }) => {
  return (
    <>
      <div className="game-card d-flex">
        <img src={image} alt="" />
        <div className="followers d-flex">
          <HiFire className="responsive" />
          <h2 className="c-white ff-poppins fw-600">{followers} Followers</h2>
        </div>
      </div>
    </>
  );
};

export default TrandingGame;
