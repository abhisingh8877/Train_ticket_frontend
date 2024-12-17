import React, { useEffect, useState } from 'react';
import './src/styles/TicketShow.css'

function TicketShow({ ticket_val }) {
  const [every_row, setRow] = useState([]);

  useEffect(() => {
    if (ticket_val) {
      setRow(ticket_val);  // Set ticket_val directly into state
    }
  }, [ticket_val]);

  console.log("Ticket Row: ", every_row);

  return (
    <div className="ticket-row-container">
      {
        every_row?.slice(0, -1).map((row_val, id) => (
          <div 
            key={id} 
            className="ticket-box" 
            style={{
              backgroundColor: row_val === 0 ? 'green' : 'red', // Green for 0, Red for 1
            }}
          />
        ))
      }
    </div>
  );
}

export default TicketShow;
