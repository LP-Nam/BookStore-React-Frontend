import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./components/Main";
import {BrowserRouter} from 'react-router-dom';
import "./mystyle.css";
import App from "./components/App";


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('root'));