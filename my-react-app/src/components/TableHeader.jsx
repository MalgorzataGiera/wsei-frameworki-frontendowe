import React from 'react';

const TableHeader = ({ label, onSort }) => {
    return (
        <th>
            <div className="dropdown">
                <button className="btn btn-link dropdown-toggle" type="button" id={`${label}-dropdown`} data-bs-toggle="dropdown" aria-expanded="false">
                    {label}
                </button>
                <ul className="dropdown-menu" aria-labelledby={`${label}-dropdown`}>
                    <li><button className="dropdown-item" onClick={() => onSort('asc')}>Ascending order</button></li>
                    <li><button className="dropdown-item" onClick={() => onSort('desc')}>Descending order</button></li>
                    <li><button className="dropdown-item" onClick={() => onSort('natural')}>Natural order</button></li>
                </ul>
            </div>
        </th>
    );
};

export default TableHeader;
