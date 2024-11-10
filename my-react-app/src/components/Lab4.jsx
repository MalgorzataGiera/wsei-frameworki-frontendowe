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
        <FlexContainer items={items}/>
      </div>
  );
}

export default Lab4;
