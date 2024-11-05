import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FlexContainer = ({ element: Element, data }) => {
  return (
    <div className="d-flex flex-wrap">
      {data.map((item, index) => (
        <Element key={index} {...item} className="flex-item" />
      ))}
    </div>
  );
};

export default FlexContainer;