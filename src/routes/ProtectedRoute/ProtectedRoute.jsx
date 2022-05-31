import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../../hooks/useAuth/useAuth";

import UserContext from "../../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
