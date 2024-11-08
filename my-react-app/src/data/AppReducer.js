
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
        // // Dodajemy nowy samochód
        // const newCar = {
        //   id: state.items.length + 1, // Automatycznie nadany id (można zmienić na bardziej zaawansowane)
        //   ...action.payload,
        // };
  
        // // Logowanie stanu po dodaniu nowego samochodu
        // console.log('Nowy stan po dodaniu samochodu:', newState);

        // return {
        //   ...state,
        //   items: [...state.items, newCar],        
        // };
        return {
          ...state,
          items: [
            ...state.items,
            { ...action.payload, id: Date.now() } // Dodajemy nowy samochód z unikalnym ID
          ],
        };
      default:
        return state;
    }
  };

export default AppReducer