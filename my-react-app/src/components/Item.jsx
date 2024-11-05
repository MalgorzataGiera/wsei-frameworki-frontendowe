import React from 'react';
import { Card } from 'react-bootstrap';

const Item = ({ brand, id, className }) => (
  <Card style={{ width: '18rem' }} className={`border mb-3 p-3 ms-3 ${className}`} key={id}>
    <Card.Body>{brand}</Card.Body>
  </Card>
);

export default Item;
