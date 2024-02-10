import React, { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer } from "react-toastify";
import  "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
}  from "react-router-dom";

// components

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  
  const [ isAuthenticated, setIsAuthenticathed ] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticathed(boolean);
  }

  async function isAuth() {
    try {
       const response = await fetch("http://localhost:3003/auth/is-verify", {
        method: "GET",
        headers: {token: localStorage.token}
       });
       const parseRes = await response.json();
       
       parseRes === true ? setIsAuthenticathed(true) :  setIsAuthenticathed(false);
    } catch (error) {
        console.error(error.message);
    }
  }

  useEffect(() => {
    isAuth()
  })

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path="/login" element={!isAuthenticated ? (<Login props="props" setAuth={setAuth}/>) : 
            (<Navigate to="/dashboard" />) }
          />
          <Route exact path="/register" element={!isAuthenticated ? (<Register setAuth={setAuth}/>) : 
            (<Navigate to="/login" />)} 
          />
          <Route exact path="/dashboard" element={isAuthenticated ? (<Dashboard setAuth={setAuth}/>) : 
            (<Navigate to="/login" />)} 
          />
        </Routes>
        <ToastContainer/>
      </div>

    </BrowserRouter>
  )


  

}

export default App;
