import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { AppContextProvider } from './context/context';

const Application = AppContextProvider(App)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Application />
  //</React.StrictMode>

);
