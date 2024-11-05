import React, { useState } from 'react';
import RatingBar from './RatingBar';

const CarProfile = ({ id, brand, color, maxSpeed}) => { //, rating, onEdit, onDelete, onRate 
  const [rating, setRating] = useState(0);
  const [isFirstClick, setIsFirstClick] = useState(true); // flaga dla pierwszego klikniecia

  const handleEdit = () => {
    if (onEdit) onEdit(id);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(id);
  };

  const handleRate = () => {
    if (isFirstClick) {
      setRating(10);
      setIsFirstClick(false);
    } else if (rating === 10) {
      setRating(0);
    } else {
      setRating(rating + 1);
    }
  };

    return (
      <div className="card mb-3" style={{ width: '18rem' }}>
          <p className="card-text">ID: {id}</p>
          <p className="card-title">Brand: {brand}</p>
          <p className="card-text">Color: {color}</p>
          <p className="card-text">Max Speed: {maxSpeed}</p>
          <p className="card-text">Rating: {rating}</p>
          
          <RatingBar rate={rating} />

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          <button className="btn btn-secondary" onClick={handleRate}>Rate</button>
        </div>
      </div>
    );
  };
  
  export default CarProfile;