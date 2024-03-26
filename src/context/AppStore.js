import React, { useState } from 'react'
import AppContext from './AppContext'

export default function AppStore({ children }) {
    const [cartItems,setCartItems] = useState([]);
    return (
       <AppContext.Provider value={{cartItems,setCartItems}}>
        {children}
       </AppContext.Provider>
    )
}
