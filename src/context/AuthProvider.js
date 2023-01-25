import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';


export const AUTHE_CONTEXT = createContext();

const AuthProvider = (props) => {
const [user,setUser] = useState({});
const [error,setError] = useState(false);
const [loading,setLoading] = useState(true);

const auth =  async () => {
  const email = 'thisiskakonray@gmail.com'
  const res = await fetch("http://127.0.0.1:8000/api/getuser/"+email);
  const data = await res.json();

  
  if (data.email) {
    setUser(data)
    setLoading(false)
  }else{
      setError(true)
      setLoading(false)
  }

};

   useEffect(()=>{

      auth();
   },[])


 const value = {
    user,
    error,
    loading
 }

 console.log(value)

   return <AUTHE_CONTEXT.Provider value={value}>{props.children}</AUTHE_CONTEXT.Provider>
};


export const useAuth = () => {
    const productValue = useContext(AUTHE_CONTEXT)

    return productValue;
}

export default AuthProvider;