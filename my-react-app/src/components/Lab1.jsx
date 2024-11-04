import {data} from '../data/module-data.js';
import CarProfile from '../components/CarProfile.jsx';
import '../App.css'

function Lab1() {
  return (
    <div className="App">
      {data.map((car, index) => (
        <CarProfile key={index} {...car} />
      ))}
    </div>
  );
}

export default Lab1;