
import React from 'react';
import CarProfile from './CarProfile';
import { useNavigate } from 'react-router-dom';
import useData from '../context/useData';

const FlexContainer = () => {
  const items = useData();
  const navigate = useNavigate();

  const handleEditClick = (id) => {
    navigate(`/lab4/edit/${id}`);
  };

  return (
    <div className="d-flex flex-wrap">
      {items.map(item => (
        <div key={item.id} className="car-item">
          <CarProfile key={item.id} id={item.id} />
        </div>
      ))}
    </div>
  );
};

export default FlexContainer;
