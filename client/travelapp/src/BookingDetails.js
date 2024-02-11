// BookingDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:12000/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch bookings');
      }
    };
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:12000/bookings/${id}`);
      setBookings(bookings.filter(booking => booking._id !== id));
    } catch (error) {
      console.error(error);
      setError('Failed to delete booking');
    }
  };

  return (
    <div>
      <h2>Booking Details</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Place</th>
            <th>Number of Persons</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking._id}>
              <td>{booking.place}</td>
              <td>{booking.numberOfPersons}</td>
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
              <td>{booking.totalAmount}</td>
              <td><button onClick={() => handleDelete(booking._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDetails;




