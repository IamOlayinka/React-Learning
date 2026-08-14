import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

//Create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

//render App component to the root element
root.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);