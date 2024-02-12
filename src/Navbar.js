import React from "react";
import { Link } from 'react-router-dom'; 
import Search from "./Search";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <h3>Navbar</h3>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/courses" className="nav-link">Courses</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
      <Search onSearch={onSearch} />
    </nav>
  );
};

export default Navbar;
