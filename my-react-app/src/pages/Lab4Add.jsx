import React, { useContext, useState } from 'react';
import AppContext from '../data/AppContext';
import { useNavigate } from 'react-router-dom';

const Lab4Add = () => {
  const { dispatch } = useContext(AppContext);
  const [formData, setFormData] = useState({
    brand: '',
    color: '',
    maxSpeed: '',
    rating: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      payload: formData,
    });
    navigate('/lab4');

    // Czyszczenie formularza po wysłaniu
    setFormData({
      brand: '',
      color: '',
      maxSpeed: '',
      rating: '',
    });    
  };

  return (
    <div>
      <h2>Add New Car</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Brand:</label>
          <input
            className="input-style"
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            maxLength="50"
            required
          />
        </div>

        <div className="form-group">
          <label>Color:</label>
          <input
            className="input-style"
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            maxLength="30"
            required
          />
        </div>

        <div className="form-group">
          <label>Max Speed:</label>
          <input
            className="input-style"
            type="number"
            name="maxSpeed"
            value={formData.maxSpeed}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Rating:</label>
          <input
            className="input-style"
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default Lab4Add;
