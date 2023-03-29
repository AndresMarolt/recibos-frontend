import React, { useEffect, useMemo, useState} from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";
import jwtDecode from 'jwt-decode';

const PrivateRoute = () => {

  const auth = useSelector(state => state.auth.authData);
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useMemo(() => {
    let token = localStorage.getItem('token');
    if(token){
        let tokenExpiration = jwtDecode(token).exp;
        let dateNow = new Date();
        
        if(tokenExpiration < dateNow.getTime()/1000){
            setIsAuthenticated(false)
        }else{
            setIsAuthenticated(true)
        }
    } else {
        setIsAuthenticated(false)
    }
  }, [auth])
  
  return isAuthenticated ? <Outlet /> : <Navigate to='/login'/>
};

export default PrivateRoute;