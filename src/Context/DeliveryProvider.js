import React, { Children, createContext, useContext, useState } from 'react';


 const DeliveryContext = createContext();

export const useDelivery =() => {
    return useContext(DeliveryContext);
}

const DeliveryProvider = () => {
    const [input,setInput] = useState({})
    const [disabled,setDisabled] = useState(true);


    const value ={
        input,
        disabled,
        setInput,
        setDisabled,
    }
    return (
        <DeliveryContext.Provider value={value}>
            {Children}
        </DeliveryContext.Provider>
    );
};

export default DeliveryProvider;