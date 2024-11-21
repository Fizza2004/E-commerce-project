import { useState, createContext } from "react";
export const CardContext = createContext();

export const CardProvider = ({children}) => {
  const [totalCount,setTotalCount] = useState(0);

  return(
    <CardContext.Provider value={{totalCount,setTotalCount}}>
      {children}
    </CardContext.Provider>
  )
}