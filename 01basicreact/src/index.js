import React from 'react';  // core foundational libaries  jo ki huma sara ka sara refrences lana ka kam karti hai
import ReactDOM from 'react-dom/client';  //reactdom  iska ek implemention hai web pa. or  jaisa react-native react ka implmention hai mobile apps pa. 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById
('root'));
 root.render( 
 <App /> );

 // website ka andar dom hota hai lakin react khud ka dom banata hai. jisko hum virtul dom khata hai, uska bad ma ya main DOM se compare karta hai or difference nikalata hai  or vo vo element change karta hai jiski usko jarurat hai .DOM is a tree structure 
 
  // react huma jsx ki power dhata hai ki hum javascript ka through hum apna html element ka render kar sakata ho