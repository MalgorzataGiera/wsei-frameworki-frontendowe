import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppReducer from '../data/AppReducer';

const FlexContainer = ({ element: Element, data }) => {
    const [items, dispatch] = useReducer(AppReducer, data);
    
  return (
    // <div className="d-flex flex-wrap">
    //   {data.map((item, index) => (
    //     <Element key={index} {...item} className="flex-item" />
    //   ))}
    // </div>


    // <div className="d-flex flex-wrap">
    //         {items.map(item => (
    //             <div className="col-3" key={item.id}>
    //                 <Element {...item} dispatch={dispatch} />
    //             </div>
    //         ))}
    //     </div>

    // <div className="d-flex flex-wrap">
    //         {items.map((item) => {
    //             const Component = element; // Przygotowanie do renderowania przekazanego komponentu
    //             return (
    //                 <Component
    //                     key={item.id}
    //                     {...item}
    //                     dispatch={dispatch} // Przekazywanie dispatch do komponentu
    //                 />
    //             );
    //         })}
    //     </div>

    <div className="row">
            {items.map(item => (
                <div className="col" key={item.id}>
                    <Element 
                        {...item} // Przekazanie wszystkich właściwości obiektu
                        dispatch={dispatch} // Przekazanie funkcji dispatch
                    />
                </div>
            ))}
        </div>
  );
};

export default FlexContainer;