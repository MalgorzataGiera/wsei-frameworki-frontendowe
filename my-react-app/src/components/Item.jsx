import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';


const Item = ({ id, className }) => {
  const { items } = useContext(AppContext); 

  const item = items.find(item => item.id === id);

  return (
    item ? (
      <Card style={{ width: '18rem' }} className={`border mb-3 p-3 ms-3 ${className}`} key={id}>
        <Card.Body>{item.brand}</Card.Body>
      </Card>
    ) : (
      <p>Item not found</p>
    )
  );
};

export default Item;
