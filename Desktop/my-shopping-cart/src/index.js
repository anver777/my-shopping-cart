import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Или другой файл стилей, если есть

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);