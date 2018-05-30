import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Content from "./Content";
import React from "react";
import BookByCategory from "./BookByCategory";
import BookByPublisher from "./BookByPublisher";
import BookDetail from "./BookDetail";
import AccountRegister from "./AccountRegister";
import MainAdmin from '../admin/Main';

import "../mystyle.css";

const MainRouter = () =>(
    <Switch>
        <Route exact path='/' component={Content}/>
        <Route exact path='/category/:id' component={BookByCategory}/>
        <Route path='/AccountRegister' component={AccountRegister}/>
        <Route path='/publisher/:id' component={BookByPublisher}/>
        <Route path='/product/:bookid' component={BookDetail}/>
    </Switch>
);

export default MainRouter;