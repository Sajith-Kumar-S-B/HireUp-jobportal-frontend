import React, { createContext, useState } from 'react'


export const deleteProjectResponseContext = createContext()

function ContextShare({children}) {

    const [deleteProjectResponse,setDeleteProjectResponse] = useState({})

  return (
  

    <deleteProjectResponseContext.Provider value={{deleteProjectResponse,deleteProjectResponse}}>
       {children}
    </deleteProjectResponseContext.Provider>
    
    
  )
}

export default ContextShare