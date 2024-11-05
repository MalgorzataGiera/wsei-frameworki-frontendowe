import { useReducer } from 'react';

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
      default:
        return state;
    }
  };

export default AppReducer