// CheckSeatPage.js
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './styles/CheckSeatPage.css'; // Import the CSS file for styling

function CheckPageseat() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
     navigate(`/user_seat/${name}`)
  };

  return (
    <div className="check-seat-container">
      <h2>Enter Your Name to Check Your Seat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          className="name-input"
        />
        <button type="submit" className="submit-btn">
          Check Seat
        </button>
      </form>
    </div>
  );
}

export default CheckPageseat;
