import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const TableHeader = ({ label, onSort }) => {
    const [order, setOrder] = useState('asc');

    const handleChange = (order) => {
        setOrder(order);
        onSort(order);
    };

    return (
        <th>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {label}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleChange('asc')}>Ascending order</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleChange('desc')}>Descending order</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleChange('natural')}>Natural Order</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </th>
    );
};

export default TableHeader;
