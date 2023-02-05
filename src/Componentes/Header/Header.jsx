/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <ul className="d-flex">
      <li className="ff-poppins fw-400 c-white">Home</li>
      <li className="ff-poppins fw-400 c-white">About us</li>
      <li className="ff-poppins fw-400 c-white">Portfolio</li>
      <li className="ff-poppins fw-400 c-white">News</li>
      <li className="ff-poppins fw-400 c-white">Contact us</li>
    </ul>
  </>
);

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header d-flex">
        <div className="logo fw-800 c-white ff-poppins">LOGO</div>
        <nav className="navigation">
          <Menu />
          <div className="mobile">
            {!mobileMenu ? (
              <FaBars
                color="#fa8305"
                size={27}
                onClick={() => {
                  setMobileMenu(true);
                }}
              />
            ) : (
              <RiCloseLine
                color="#fa8305"
                size={35}
                onClick={() => {
                  setMobileMenu(false);
                }}
              />
            )}
            <div className="contactus ff-poppins fw-400 c-white">
              Contact us
            </div>
            {mobileMenu && (
              <div className="mobilemenu scale-up-center ">
                <p>
                  <Link className="ff-poppins fw-400 c-white" to="/">
                    Home
                  </Link>
                </p>
                <p>
                  <Link className="ff-poppins fw-400 c-white">About us</Link>
                </p>
                <p>
                  <Link className="ff-poppins fw-400 c-white">Portfolio</Link>
                </p>
                <p>
                  <Link className="ff-poppins fw-400 c-white">News</Link>
                </p>
                <p>
                  <a className="ff-poppins fw-400 c-white" href="#">
                    Library
                  </a>
                </p>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
