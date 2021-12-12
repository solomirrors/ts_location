import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {User, Company, Map} from "./classes";

const user = new User();
console.log(user);
const company = new Company();
console.log(company)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);