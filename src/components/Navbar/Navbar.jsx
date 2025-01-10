

import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Side */}
      <div className="navbar-logo">  InterLMGArmWrestling 💪🆚💪   </div>

      {/* Right Side */}
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
