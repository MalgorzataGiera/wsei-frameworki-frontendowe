import React, { useState } from 'react';
import RatingBar from './RatingBar';
import { useReducer } from 'react';

const CarProfile = ({ id, brand, color, maxSpeed, rating, dispatch}) => { //, rating, onEdit, onDelete, onRate 
  // const [rating, setRating] = useState(0);
  // const [isFirstClick, setIsFirstClick] = useState(true); // flaga dla pierwszego klikniecia
  const [currentRating, setCurrentRating] = useState(rating);

  const handleEdit = () => {
    if (onEdit) onEdit(id);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(id);
  };

  // const handleRate = () => {
  //   if (isFirstClick) {
  //     setRating(10);
  //     setIsFirstClick(false);
  //   } else if (rating === 10) {
  //     setRating(0);
  //   } else {
  //     setRating(rating + 1);
  //   }
  // };

  const handleRate = () => {
    // Sprawdź, czy obecny ranking to 10
    if (currentRating === 10) {
        setCurrentRating(0); // Zresetuj ranking
        dispatch({
            type: "rate",
            payload: { id, rating: 0 }
        });
    } else {
        if (currentRating === 0) {
            setCurrentRating(10); // Ustaw ranking na 10
            dispatch({
                type: "rate",
                payload: { id, rating: 10 }
            });
        } else {
            setCurrentRating(currentRating + 1); // Zwiększ ranking o 1
            dispatch({
                type: "rate",
                payload: { id, rating: currentRating + 1 }
            });
        }}}
  //   

    return (
      <div className="card mb-3" style={{ width: '18rem' }}>
          <p className="card-text">ID: {id}</p>
          <p className="card-title">Brand: {brand}</p>
          <p className="card-text">Color: {color}</p>
          <p className="card-text">Max Speed: {maxSpeed}</p>
          <p className="card-text">Rating: {rating}</p>

          <RatingBar rate={currentRating} />

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          <button className="btn btn-secondary" onClick={handleRate}>Rate</button>
        </div>
      </div>
    );
  }; 
  
  export default CarProfile;