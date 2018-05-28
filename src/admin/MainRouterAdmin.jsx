import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Content from "./Content";
import React from "react";
import ListBook from "./ListBook";
import ListBookType from "./ListBookType";
import ListPublisher from "./ListPublisher";
import ListAccount from "./ListAccount"
const MainRouterAdmin = () =>(
    <Switch>
        <Route exact path='/admin' component={Content}/>
        <Route path='/ListBook' component={ListBook}/>
        <Route path='/ListBookType' component={ListBookType}/>
        <Route path='/ListPublisher' component={ListPublisher}/>
        <Route path='/ListAccount' component={ListAccount}/>
    </Switch>
);

export default MainRouterAdmin;