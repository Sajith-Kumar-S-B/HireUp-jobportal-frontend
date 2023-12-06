import React, { createContext, useState } from 'react'


export const TokenAuthContext = createContext()

function TokenAuth({children}) {
    const [sessionStore,setSessionStore] = useState({})

  

  return (
    <>
    <TokenAuthContext.Provider value={{sessionStore,setSessionStore}}>
        {children}
    </TokenAuthContext.Provider>
    </>
  )
}

export default TokenAuth
