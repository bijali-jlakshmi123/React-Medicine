import React from "react";
import "./Navbar.css";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">GI<span>Cognition</span></div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/SymptomsSection">Know Your Gut</Link></li>
          <li><Link to="/TestHeaderSection">Tests</Link></li>
          <li><Link to="/HowItWorksSection">How It Works</Link></li>
          <li><Link to="/AboutSection">About us</Link></li>
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
