import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const {Component} = props;
    const isLogin = localStorage.getItem("login")
  return isLogin ? <Component {...props}/> : <Navigate to ='/' />
}

export default ProtectedRoute