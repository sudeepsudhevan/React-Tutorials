import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './store';

store.dispatch({ type: "customer/createCustomer", payload: { fullName: "John Doe", nationalID: "123456789" } });
console.log(store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


