import React from 'react';  // core foundational libaries  jo ki huma sara ka sara refrences lana ka kam karti hai
import ReactDOM from 'react-dom/client';  //reactdom  iska ek implemention hai web pa. or  jaisa react-native react ka implmention hai mobile apps pa. 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// website ka andar dom hota hai lakin react khud ka dom banata hai. DOM is a tree structure 