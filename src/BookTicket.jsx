import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation
import './styles/BookTicket.css';

function BookTicket() {
  const [name, setName] = useState('');
  const [seats, setSeats] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !seats) {
      setError('Please provide both name and number of seats');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/seat/reverveSeat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          Number_seat: parseInt(seats),
        }),
      });

      const data = await response.json();

      if (data.isFailed === false) {
        setSuccess('Ticket reserved successfully!');
        // Redirect to /user_seat/:userName after successful booking
        navigate(`/user_seat/${name}`);
      } else {
        setError(data.message || 'Failed to reserve ticket');
      }
    } catch (error) {
      setError('Error connecting to the server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-container">
      <h1>Book Your Ticket</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seats">Number of Seats:</label>
          <input
            type="number"
            id="seats"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            required
            min="1"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Booking...' : 'Book Ticket'}
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
}

export default BookTicket;
