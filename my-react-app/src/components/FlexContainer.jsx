import React, {useReducer} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import AppReducer from '../data/AppReducer';
import { Row, Col } from 'react-bootstrap';

const FlexContainer = ({ element: Element, data, dispatch }) => {
    //const [items, dispatch] = useReducer(AppReducer, data);
    
  return (
    <Row className="d-flex flex-wrap">
    {data.map(item => (
        <Col key={item.id} md={4} className="mb-3"> {}
            <Element person={item} dispatch={dispatch} /> {}
        </Col>
    ))}
    </Row>
  );
};

export default FlexContainer;