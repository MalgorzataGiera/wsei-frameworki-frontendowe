import React from "react";
import { useParams } from "react-router-dom";
import {data} from '../data/module-data.js'

function Lab2() {
    const {id} = useParams();
    const car = data.find(car => car.id === parseInt(id));

    if (!car) {
        return <div>Samochód o podanym ID nie został znaleziony</div>;
    }
    return (<div>
        <ul>
            {Object.entries(car).map(([key, value]) => (
                <li key={key}>
                    <strong>{key}:</strong> {value}
                </li>
            ))}
        </ul>
    </div>);
}
export default Lab2;