import React from 'react';

import { Routes, Route, Link, useRoutes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';


function App() {
  let routs = useRoutes(
    [
      {path:"/login",element:<Login/>},
      {path:"/register",element:<Register/>},
    ]
  )
  return routs
 
}

export default App;
