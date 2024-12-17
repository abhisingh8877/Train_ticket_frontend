import React, { useState, useContext, useEffect } from 'react';
import { context } from './context';
import TicketShow from '../TicketShow';
import { Link } from 'react-router-dom';
import './styles/ShowTicket.css';

const ShowTicket = () => {
  const [Ticket, setTicket] = useState([]);
  const { seat } = useContext(context);

  useEffect(() => {
    if (seat) {
      setTicket(seat);  // Set the seat array directly, assuming seat is an array
    }
  }, [seat]);

  return (
    <div className="ticket-container">
      <h1 className="ticket-header">Ticket Booking App</h1>
      <h2 className="ticket-subheader">Here is Your Ticket Arrangement</h2>
      <div className="ticket-layout">
        {
          !Ticket || Ticket.length === 0 ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Loading Tickets...</p>
            </div>
          ) : (
            Ticket?.map((ticket_row, id) => (
              <div key={id} className="ticket-row">
                <TicketShow ticket_val={ticket_row} />
              </div>
            ))
          )
        }
      </div>
      
      <Link to="/book-ticket" className="book-ticket-button">
        Book Your Ticket
      </Link>
    </div>
  );
};

export default ShowTicket;
