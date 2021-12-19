import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {User, Company, CustomMap} from "./classes";

const user = new User();
console.log(user);
const company = new Company();
console.log(company)
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company)

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);