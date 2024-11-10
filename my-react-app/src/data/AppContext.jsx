import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { data } from './module-data';

const initialState = {
    items: data,
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
