import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";



const RequireAuth = ({ children }) => {
  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);


  if (loading) {
    return <h1>Loading...</h1>;
  }


  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user && user?.emailVerified == false) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }


  return children;
};

export default RequireAuth;