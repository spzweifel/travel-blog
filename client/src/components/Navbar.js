import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import "./Navbar.css";
import "../pages/domestic/california";

const AppNavbar = () => {
  const [isDomesticActive, setIsDomesticActive] = useState(false);
  const [isInternationalActive, setIsInternationalActive] = useState(false);

  const toggleDomesticDropdown = () => {
    setIsDomesticActive(!isDomesticActive);
    setIsInternationalActive(false); // Close the international dropdown when domestic is clicked
  };

  const toggleInternationalDropdown = () => {
    setIsInternationalActive(!isInternationalActive);
    setIsDomesticActive(false); // Close the domestic dropdown when international is clicked
  };

  // Add an event listener to close the dropdowns when clicking outside
  useEffect(() => {
    const closeDropdowns = (e) => {
      if (!e.target.closest(".dropdown")) {
        setIsDomesticActive(false);
        setIsInternationalActive(false);
      }
    };

    document.addEventListener("click", closeDropdowns);

    return () => {
      document.removeEventListener("click", closeDropdowns);
    };
  }, []);

  // Prevent the dropdown from closing when clicking inside
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  
  return (
    <>
      <nav
        className={`navbar has-background-success-dark`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container is-flex-direction-row is-justify-content-left">
          <div className="nav-item">
            <Link
              to="/"
              className="button hover is-success is-medium is-rounded"
            >
              Home
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/About" className="button hover is-medium is-rounded">
              About The Author
            </Link>
          </div>
          <div className="nav-item">
            {/* Dropdown for Domestic American Trips */}
            <div className={`dropdown ${isDomesticActive ? "is-active" : ""}`}>
              <div className="dropdown-trigger">
                <button
                  className="button is-medium is-rounded"
                  onClick={toggleDomesticDropdown}
                >
                  Domestic American Trips
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <Link to="/domestic/california" className="dropdown-item">
                    California
                  </Link>
                  <Link to="/domestic/colorado" className="dropdown-item">
                    Colorado
                  </Link>
                  <Link to="/domestic/kentucky" className="dropdown-item">
                    Kentucky
                  </Link>
                  <Link to="/domestic/virginia" className="dropdown-item">
                    Virginia
                  </Link>
                  {/* Add more trip links as needed */}
                </div>
              </div>
            </div>
          </div>
          <div className="nav-item">
            {/* Dropdown for International Trips */}
            <div className={`dropdown ${isInternationalActive ? "is-active" : ""}`}>
              <div className="dropdown-trigger">
                <button
                  className="button is-medium is-rounded"
                  onClick={toggleInternationalDropdown}
                >
                  International Trips
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <Link to="/international/austria" className="dropdown-item">
                    Austria
                  </Link>
                  <Link to="/international/bali" className="dropdown-item">
                    Bali
                  </Link>
                  <Link to="/international/italy" className="dropdown-item">
                    Italy
                  </Link>
                  <Link to="/international/japan" className="dropdown-item">
                    Japan
                  </Link>
                  <Link to="/international/norway" className="dropdown-item">
                    Norway
                  </Link>
                  <Link to="/international/slovenia" className="dropdown-item">
                    Slovenia
                  </Link>
                  {/* Add more trip links as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container is-justify-content-right">
          <div className="nav-item">
            <a
              href="https://www.instagram.com/suddenlyunplanned/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                {" "}
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppNavbar;
