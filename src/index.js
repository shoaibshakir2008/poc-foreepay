import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ForeePayProvider } from 'react-foree-pay-checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ForeePayProvider useProduction={false}>
      <App />
    </ForeePayProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
