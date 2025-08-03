import axios from 'axios';
import {createContext, useContext, useEffect, useState,} from 'react'
import BASE_URl from '../config';

const AuthContext=createContext();
export const AuthProvider=({children})=>{
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
  const logout=()=>{
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  useEffect(()=>{
    ( async () => {
        try {
          const token=localStorage.getItem('token');
          const res = await axios.get(`${BASE_URl}/api/auth`
            , {
              headers:{
                'Authorization':token 
              }
            });
              setUser(res.data);
            if(res.status===401){
              logout();
            }
        

        } catch (err) {
          console.error('Failed to fetch current user', err);
          setUser(null);
        }finally{
          setLoading(false);
        }
      }
      
     )()
    
  },[]
)
  return (
    <AuthContext.Provider value={{user,setUser,logout}}>
      {loading && <p>Loading...</p>}
      {!loading && <>{children}</>}
    </AuthContext.Provider>

  )
}


export const useAuth=()=>useContext(AuthContext);