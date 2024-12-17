import React, { useEffect , useState,createContext} from 'react'
import axios from 'axios';
export const context=createContext(null);

 export const Context=({children})=>{
  const [seat,setSeat]=useState();
  
  useEffect(() => {
  const fetchSeats = async () => {
    try {
      const response = await fetch("http://localhost:5000/seat/seat_availablity");
      const result = await response.json();
      const seat_arrangeMent = result.seat_arrangeMent;
      setSeat(seat_arrangeMent[0].SeatArrangeMent);
    } catch (error) {
      console.error('Error fetching seat availability:', error);
    }
  };
  fetchSeats();
}, []);
return (
   <context.Provider value={{seat}}>
     {children}
   </context.Provider>
)
}

   



