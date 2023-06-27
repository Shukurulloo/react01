import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index2.css';
import SideBar from './components/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Accounting from './components/pages/accounting';
import Transactions from './components/pages/Transactions';
import Report from './components/pages/report';
import Agency from './components/pages/Agency';
import Settings from './components/pages/Settings';
import Trash from './components/pages/Trash';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{display:"flex"}}>
        <BrowserRouter>
        <SideBar/>
      <Routes>
        <Route path="/dashboard"  element={<Dashboard/>}/> 
        <Route path="/accounting"  element={<Accounting/>}/> 
        <Route path="/transactions"  element={<Transactions/>}/> 
        <Route path="/report"  element={< Report/>}/>
        <Route path="/agency"  element={< Agency/>}/> 
        <Route path="/settings"  element={< Settings/>}/> 
        <Route path="/trash"  element={< Trash/>}/> 
  
      </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode>
);

