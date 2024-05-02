// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

// Dummy authentication check
const isAuthenticated = () => {
  // You would replace this with your actual logic to determine if the user is authenticated
  return localStorage.getItem("isLoggedIn") === "true";
};

function PrivateRoute({ children }) {
  return children;  // Temporary change to bypass authentication
}
  

export default PrivateRoute;

