import React from "react";
import "./Navbar.css";
import { FaUser, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">GI<span>Cognition</span></div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Know Your Gut</li>
          <li>Tests</li>
          <li>How It Works</li>
          <li>About Us</li>
        </ul>
      </div>

      <div className="nav-right">
        <button className="consult-btn">Book Consultation</button>

        <FaUser className="icon" />
        <FaShoppingCart className="icon" />
      </div>
    </nav>
  );
}
