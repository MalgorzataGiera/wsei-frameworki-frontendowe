import React, { useReducer } from 'react';
import AppContext from '../data/AppContext';  // Importujemy nasz kontekst
import AppReducer from '../data/AppReducer';  // Importujemy naszą funkcję redukującą
import FlexContainer from '../components/FlexContainer';  // Importujemy komponent FlexContainer
import {data} from '../data/module-data'

const initialState = {
    items: data
};

function Lab4() {
  const [state, appDispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ items: state.items, dispatch: appDispatch }}>
      <div>
        <h1>Car Profiles in Lab4</h1>
        <FlexContainer />
      </div>
    </AppContext.Provider>
  );
}

export default Lab4;
