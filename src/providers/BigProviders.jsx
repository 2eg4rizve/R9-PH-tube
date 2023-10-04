/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react';

export const BigContext = createContext();



const BigProviders = ({ children }) => {

    const [nowCategory, setNowCategory] = useState(1000);

    console.log("BIgProvider nowCategory : ", nowCategory);

    const all = {
        nowCategory,
        setNowCategory
    }


    return (
        <BigContext.Provider value={all}>
            {children}
        </BigContext.Provider>

    );
};

export default BigProviders;