
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Places = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get('http://localhost:12000/states');
        setPlaces(response.data);
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <div>
      <h2>Places</h2>
      <div className="pricing">
      <ul>
        {places.map((place, index) => (
          <li key={index} className='places'>
            <img src={place.images} alt={place.place} style={{ maxWidth: '100px' }} />
            <h3>{place.place}</h3>
            <p>Rating: {place.averageRating}</p>
            <p>Price: {place.price}</p>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
};

export default Places;
