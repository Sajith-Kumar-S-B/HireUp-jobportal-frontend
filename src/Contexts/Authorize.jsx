import React, { createContext, useEffect, useState } from 'react'
export const AuthorisationContext = createContext()
export const UserAuthorisationContext = createContext()

export const userDataContext = createContext()
const googleAuthContext = createContext();

function Authorize({children}) {
    const [isAuthorized,setIsAuthorized] = useState(false)
    const [isUserAuthorized,setIsUserAuthorized] = useState(false)

    const [userData, setUserData] = useState({})
    const [currentUser, setCurrentUser] = useState(null);
   
    useEffect(()=>{
      if(isAuthorized){
        setIsAuthorized(true)
        setIsUserAuthorized(false)
      }

      
    },[isAuthorized])
  
  return (
    <>
   <UserAuthorisationContext.Provider value={{isUserAuthorized,setIsUserAuthorized}}>
      <AuthorisationContext.Provider value={{isAuthorized,setIsAuthorized}}>
       <googleAuthContext.Provider value={{currentUser, setCurrentUser}}> <userDataContext.Provider value={{userData,setUserData}}> {children}</userDataContext.Provider></googleAuthContext.Provider>
      </AuthorisationContext.Provider>
   </UserAuthorisationContext.Provider>
    </>
  )
}

export default Authorize