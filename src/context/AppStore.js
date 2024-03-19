import React, { useState } from 'react'
import AppContext from './AppContext';

export default function AppStore({children}) {
  let myAppName = "SuperReact App";
  let [userTheme,setUserTheme] = useState('dark');

  return (
   <AppContext.Provider value={{myAppName,userTheme,setUserTheme}}>
    {children}
   </AppContext.Provider>
  )
}
