import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the dynamic userName
import UserSeatsBlock from './UserSeatsBlock';

function UserPage() {
  const { userName } = useParams(); // Get the userName from the URL params
//   const [userSeats, setUserSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [finalUserSeatNumber,setSeatNumber]=useState([]);
  useEffect(() => {
    // Fetch user seat information based on userName
    const fetchUserSeats = async () => {
      try {
        const response = await fetch(`http://localhost:5000/seat/user_seat/${userName}`);
        const value = await response.json();
        const  data=value.seat_occupied;
        console.log("your data is for user",data);
        if (response.ok) {

        //   setUserSeats(data.seatNumber); // Assuming the API returns a list of seat information
        const seatNumbers=data.seatNumber;
        
          for(let i=0;i<seatNumbers.length-1;i++)
          {
             for(let j=0;j<seatNumbers[i].length;j++)
             {  if(seatNumbers[i][j]==1)
              setSeatNumber((prevNumbers) => [...prevNumbers, i * 11 + j + 1]);
              
             }
          }
          for(let i=0;i<3;i++)
          {
             if(seatNumbers[7][i]==1)
             {
              setSeatNumber((prevNumbers) => [...prevNumbers, 7 * 11 + i + 1]);
             }
          }
        } else {
          setError('Failed to load user seats');
        }
      } catch (error) {
        setError('Error connecting to the server');
      } finally {
        setLoading(false);
      }
    };

    fetchUserSeats();
  }, [userName]);

  if (loading) {
    return <p>Loading your seat information...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
          {finalUserSeatNumber?
          <UserSeatsBlock userName={userName} userSeats={finalUserSeatNumber}/>
          :
          <p>No Seats are reserved Yet</p>
          }
      </div>
  );
}

export default UserPage;
