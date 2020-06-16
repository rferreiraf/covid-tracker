import React from "react";
import logo from "../img/coronavirus.png";

export const NavComponent = () => {
  return (
    <div>
      <nav className="nav-container">
        <img src={logo} alt="coronavirus" width="50" height="50" />
        <h2>Covid19 - World Live Tracker</h2>
      </nav>
    </div>
  );
};
