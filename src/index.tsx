import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AdminComponent } from './admin/admin';
import{ BrowserRouter as Router, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AdminComponent></AdminComponent>
    <Router>
    <App />
    </Router>
    
  </React.StrictMode>
);
