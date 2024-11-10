
const AppReducer = (state, action) => {
    switch (action.type) {
      case "rate":
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, rating: action.payload.rating }
              : item
          )
        };
      case 'add':
        return {
          ...state,
          items: [
            ...state.items,
            { ...action.payload, id: Date.now() } // unique id
          ],
        };
      case 'edit':
        return {
          ...state,
          items: state.items.map((car) => 
            car.id === action.payload.id ? { ...car, ...action.payload } : car
          )
        };
      default:
        return state;
    }
  };

export default AppReducer