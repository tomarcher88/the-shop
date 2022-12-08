import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = props => {



  return (
    <StoreContext.Provider value={{}}>
      {props.children}
    </StoreContext.Provider>
  )
}