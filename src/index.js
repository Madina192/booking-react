import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App'
import {BrowserRouter} from "react-router-dom"
import Auth2 from "./components/Auth2";


console.log(process.env.REACT_APP_API_URL);
console.log(Auth2);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

