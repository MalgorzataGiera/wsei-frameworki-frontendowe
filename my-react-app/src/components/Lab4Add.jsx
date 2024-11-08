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
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = [];
    if (!formData.brand) newErrors.push('Brand is required.');
    if (!formData.color) newErrors.push('Color is required.');
    if (!formData.maxSpeed || isNaN(formData.maxSpeed))
      newErrors.push('Max speed must be a number.');
    if (!formData.rating || isNaN(formData.rating))
      newErrors.push('Rating must be a number.');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
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
    }
  };

  return (
    <div>
      <h2>Add New Car</h2>

      {errors.length > 0 && (
        <div className="text-danger">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

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
