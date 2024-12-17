// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css'; // Import the CSS file for styling

function Header() {
  return (
    <header className="header">
      {/* Left side: Home button with icon */}
      <div className="home-section">
        <Link to="/" className="home-link">
          <i className="fas fa-home"></i> {/* FontAwesome home icon */}
          <span>Home</span>
        </Link>
      </div>

      {/* Right side: Check your seat button */}
      <div className="check-seat-section">
        <Link to="/username_seat" className="check-seat-btn">
          Check Your Seat
        </Link>
      </div>
    </header>
  );
}

export default Header;
