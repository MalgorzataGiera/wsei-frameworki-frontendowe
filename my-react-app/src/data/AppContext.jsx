import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { data } from './module-data';

// // Tworzymy kontekst z domyślnymi wartościami dla items i dispatch
// const AppContext = createContext({
//     items: [],  // Stan przechowujący kolekcję obiektów
//     dispatch: () => {}
// });
// export const AppProvider = AppContext.Provider;
const initialState = {
    items: data, // Jeśli nie masz początkowych danych, ustaw pustą tablicę
  };
  
  const AppContext = createContext(initialState);
  
  export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    return (
      <AppContext.Provider value={{ items: state.items, dispatch }}>
        {children}
      </AppContext.Provider>
    );
  };

export default AppContext;
