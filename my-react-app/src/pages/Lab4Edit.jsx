import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AppContext from '../data/AppContext';
import { useParams, useNavigate } from 'react-router-dom';

const EditForm = () => {
    const { id } = useParams();
    const { items, dispatch } = useContext(AppContext);
    const navigate = useNavigate();
    const car = items.find((item) => item.id === parseInt(id));

    const { register, formState: { errors }, handleSubmit, setValue} = useForm({
        defaultValues: {
        brand: '',
        color: '',
        maxSpeed: '',
        rating: ''
        }
  });

  // Ustawia wartości początkowe
  useEffect(() => {
    if (car) {
      setValue("brand", car.brand);
      setValue("color", car.color);
      setValue("maxSpeed", car.maxSpeed);
      setValue("rating", car.rating);
    } else {
      console.error(`Car with id ${id} not found`);
      navigate('/lab4'); // jesli obiekt o danym id nie istnieje
    }
  }, [car, id, setValue, navigate]);

  const onSubmit = (data) => {
    dispatch({
      type: 'edit',
      payload: { ...data, id: car.id }
    });
    navigate('/lab4');
  };

return (
    <div>
      <h2>Edit Car</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('id')} />

      <div className="form-group">
          <label>Brand:</label>
      {errors.brand && <p style={{ color: 'red' }}>{errors.brand.message}</p>}
      <input className="input-style"
        type="text"
        {...register('brand', {
          required: 'Brand is required',
          maxLength: {
            value: 50,
            message: 'Brand must be at most 50 characters'
          }
        })}
        placeholder="Brand"
      /></div>

      <div className="form-group">
          <label>Color:</label>
      {errors.color && <p style={{ color: 'red' }}>{errors.color.message}</p>}
      <input className="input-style"
        type="text"
        {...register('color', {
          required: 'Color is required',
          maxLength: {
            value: 30,
            message: 'Color must be at most 30 characters'
          }
        })}
        placeholder="Color"
      /></div>
      
      <div className="form-group">
          <label>Max Speed:</label>
      {errors.maxSpeed && <p style={{ color: 'red' }}>{errors.maxSpeed.message}</p>}
      <input className="input-style"
        type="number"
        {...register('maxSpeed', {
          required: 'Max speed is required',
          valueAsNumber: true,
          min: {
            value: 0,
            message: 'Max speed must be at least 0'
          },
          max: {
            value: 300,
            message: 'Max speed must be below 300'
          }
        })}
        placeholder="Max Speed"
      /></div>

      <div className="form-group">
          <label>Rating:</label>
      {errors.rating && <p style={{ color: 'red' }}>{errors.rating.message}</p>}
      <input className="input-style"
        type="number"
        {...register('rating', {
          required: 'Rating is required',
          valueAsNumber: true,
          min: {
            value: 0,
            message: 'Rating must be at least 0'
          },
          max: {
            value: 10,
            message: 'Rating must be at most 10'
          }
        })}
        placeholder="Rating"
      /></div>

      <button type="submit">Save Changes</button>
    </form>
    </div>
  );
};

export default EditForm;
