import React, { useState, useContext} from 'react';
import RatingBar from './RatingBar';
import AppContext from '../data/AppContext'

const CarProfile = ({ id, brand, color, maxSpeed, rating}) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const [firstClick, setFirstClick] = useState(true);

  const { dispatch } = useContext(AppContext);

  const handleEdit = () => {
    if (onEdit) onEdit(id);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(id);
  };

  const handleRate = () => {
    if (firstClick) {

        setCurrentRating(10);
        setFirstClick(false);
        dispatch({
            type: "rate",
            payload: { id, rating: 10 }
        });
    } else {
        if (currentRating === 10) {
            setCurrentRating(0);
            dispatch({
                type: "rate",
                payload: { id, rating: 0 }
            });
        } else {
            setCurrentRating(currentRating + 1);
            dispatch({
                type: "rate",
                payload: { id, rating: currentRating + 1 }
            });
        }
    }}

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