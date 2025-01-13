import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css';
import App from './App';
import About from './About';
import reportWebVitals from './reportWebVitals';
import Applictions from './Applictions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
    <Routes>
      <Route path='/'element={<App/>} />
      <Route path='/about'element={<About/>} />

      <Route path='/app'element={<Applictions/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
