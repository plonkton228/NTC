import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routs from './modules/Routing/Routs';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
   <React.StrictMode>
    <Routs/>
   </React.StrictMode>
  </BrowserRouter>
 
);


