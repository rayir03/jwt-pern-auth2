import React, { useState } from 'react';
import './App.css';
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
      </div>

    </BrowserRouter>
  )


  

}

export default App;
