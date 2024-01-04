import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './Common/Header';
import Footer from './Common/Footer';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);







