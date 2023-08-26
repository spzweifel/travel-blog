import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowModal(true);
  };

  const toggleHamburger = () => {
    // <- Here's the new toggleHamburger function
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-item">
            <Link to="/" className="button">
              Home
            </Link>
            <button
              className={`navbar-burger ${isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={toggleHamburger}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-end">
                    {/* working here right now. Trying to make a link to a tab in the nav bar called international trips where there'd be a drop down with a list of the countries visited so far. will need to make a page or component for this */}
                    <Link to="/International-trips"></Link>
                </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppNavbar;
