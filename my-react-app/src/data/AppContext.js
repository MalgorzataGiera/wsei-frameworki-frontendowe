// data/AppContext.js
import { createContext } from "react";

// Tworzymy kontekst z domyślnymi wartościami dla items i dispatch
const AppContext = createContext({
    items: [],  // Stan przechowujący kolekcję obiektów
    dispatch: () => {}
});
export const AppProvider = AppContext.Provider;

export default AppContext;
