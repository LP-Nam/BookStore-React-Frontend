import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./components/Main.jsx";
import {BrowserRouter} from 'react-router-dom';
import "./mystyle.css";

ReactDOM.render((
    <BrowserRouter>
        <Main />
    </BrowserRouter>), document.getElementById('root'));