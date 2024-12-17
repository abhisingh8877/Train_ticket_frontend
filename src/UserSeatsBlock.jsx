import React from 'react';
import './styles/UserSeat.css'; // Import the CSS for styling

function UserSeatsBlock({ userName, userSeats }) {
  return (
    <div className="user-seats-container">
      {/* Display the user name at the top */}
      <div className="seat-name">{userName}</div>
      
      {/* Display seat blocks */}
      <div style={{display:'flex',flexWrap:'wrap'}}>
      {userSeats.length > 0 ? (
        userSeats.map((seat, index) => (
          <div key={index} className="seat-block">
            <div className="seat-number">{seat}</div>
          </div>
        ))
      ) : (
        <p>No seats reserved yet.</p>
      )}
      </div>
    </div>
  );
}

export default UserSeatsBlock;
