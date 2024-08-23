import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Cria um root com o novo método

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
