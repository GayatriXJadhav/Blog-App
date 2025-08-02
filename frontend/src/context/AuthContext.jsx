import {Children, createContext, useContext, useState,} from 'react'

const AuthContext=createContext();
export const AuthProvider=({Children})=>{
  const [user,setUser]=useState(null);
  return (
    <AuthContext.Provider value={{user,setUser}}>
      {Children}
    </AuthContext.Provider>

  )
}


export const useAuth=()=>useContext(AuthContext);