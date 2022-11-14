import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import NavigationBar from './components/Navbar';



export function AdminComponent(){
    return (
        <div>
            
        <Router>
            <NavigationBar/>
            <Routes>
                <Route path='/'/>
            </Routes>
        </Router>

        </div>
    )
}