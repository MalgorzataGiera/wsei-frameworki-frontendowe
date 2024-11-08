import React, { useContext } from 'react';
import AppContext from '../data/AppContext';  
import FlexContainer from '../components/FlexContainer';  
import { useNavigate } from 'react-router-dom';

function Lab4() {
  const { items } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/lab4/add');  
  };

  return (
      <div>
        <h1>Car Profiles in Lab4</h1>
        <button onClick={handleAddClick}>Add New Car</button>
        <FlexContainer />
      </div>
  );
}

export default Lab4;
