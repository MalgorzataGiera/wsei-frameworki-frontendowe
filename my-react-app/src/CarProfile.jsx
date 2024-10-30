

const CarProfile = ({ id, brand, color, maxSpeed }) => {
    return (
      <div className="card mb-3" style={{ width: '18rem' }}>
          <p className="card-text">ID: {id}</p>
          <p className="card-title">Brand: {brand}</p>
          <p className="card-text">Color: {color}</p>
          <p className="card-text">Max Speed: {maxSpeed}</p>
      </div>
    );
  };
  
  export default CarProfile;