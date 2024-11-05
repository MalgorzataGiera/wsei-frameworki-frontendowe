import React from 'react';

const RatingBar = ({ rate }) => {
  const stars = Array.from({ length: 10 }, (_, index) => {
    return (
      <span key={index} style={{ color: index < rate ? 'black' : 'lightgray' }}>
        ★
      </span>
    );
  });

  return <div>{stars}</div>;
};

export default RatingBar;
