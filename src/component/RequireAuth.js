import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";


const RequireAuth = ({ children }) => {
  let location = useLocation();
  const {user, loading, error} = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

console.log(user,loading,error)


  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }


  return children;
};

export default RequireAuth;