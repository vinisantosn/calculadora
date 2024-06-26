import React from 'react';
import ReactDOM from 'react-dom/client';


import GlobalStyle from './global';
import Calculadora from './Calculadora';
import Header from './components/Header';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Header/>
    <Calculadora />
    <Footer/>
  </React.StrictMode>
);


