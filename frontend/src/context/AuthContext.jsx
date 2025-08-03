import axios from 'axios';
import {createContext, useContext, useEffect, useState,} from 'react'
import BASE_URl from '../config';

const AuthContext=createContext();
export const AuthProvider=({children})=>{
  const [user,setUser]=useState(null);
  useEffect(()=>{
    ( async () => {
        try {
          const res = await axios.get(`${BASE_URl}/api/auth`, { withCredentials: true });
          setUser(res.data);
        } catch (err) {
          console.error('Failed to fetch current user', err);
          setUser(null);
        }
      }
      
     )()
    
  })
  return (
    <AuthContext.Provider value={{user,setUser}}>
      {children}
    </AuthContext.Provider>

  )
}


export const useAuth=()=>useContext(AuthContext);