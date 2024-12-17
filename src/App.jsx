import { Context } from './context';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowTicket from './ShowTicket';
import BookTicket from './BookTicket';
import CheckPageseat from './CheckPageseat';
import UserPage from './UserPage';
import Header from './Header';

function App() {
  return (
    <Context>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<ShowTicket />} />
          <Route path="/book-ticket" element={<BookTicket />} />
          <Route path="/user_seat/:userName" element={<UserPage />} /> 
          <Route path="/username_seat" element={<CheckPageseat/>}/>
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
