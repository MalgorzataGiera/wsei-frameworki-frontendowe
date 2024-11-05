import { useReducer } from 'react';
export default function AppReducer(state, action){
    switch(action.type){
        case "edit":
            return state;
        case "rate":{
        //     return state.map(item =>
        //     item.id === action.payload.id ? { ...item, rating: action.payload.rating } : item
        // );
        return state.map(car =>
            car.id === action.payload.id
                ? { ...car, rating: action.payload.rating } // aktualizacja ratingu
                : car // pozostaw inne obiekty bez zmian
        );
        }
        case "delete":
            return state.filter(car => car.id !== action.payload.id);      
    }
}