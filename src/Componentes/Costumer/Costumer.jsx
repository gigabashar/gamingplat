import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Costumer.css";

const Costumer = ({ image, name, location, star, text, key }) => {
  return (
    <>
      <div className="costumer-review-card">
        <div className="costumer-info">
          <img src={image} alt={key} />
          <div className="costumer-who">
            <p className="c-white fw-500 ff-poppins">{name}</p>
            <span className="fw-400 ff-poppins">{location}</span>
          </div>
          <div className="stars">
            <span className="fw-400 ff-poppins c-white">{star}</span>
            <AiFillStar size={17} color={"#FEA250"} />
          </div>
        </div>
        <div className="text">
          <p className="c-white ff-poppins fw-400">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Costumer;
