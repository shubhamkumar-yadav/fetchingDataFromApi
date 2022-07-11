import React, { createContext, useState } from 'react';
const ProductDetailsContext = createContext(null);
const ContextProvider = ({children})=>{
    const [aboutProduct,setAboutProduct] = useState('');
    return (<>
    <ProductDetailsContext.Provider value={{aboutProduct,setAboutProduct}}>
        {children}
    </ProductDetailsContext.Provider>
    </>);
};
export {ContextProvider,ProductDetailsContext};
//this is context page where i am storing the product details to use throughout the project