import React from "react";
import windowSize from "react-window-size";

const Navbar = ({ windowWidth }) => {
  return (
    <div className={windowWidth > 992 ? "bg-light shadow" : ""}>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <a className="navbar-brand" href="#">
          Meals&More
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Best Meal Delivery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Learn
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default windowSize(Navbar);
