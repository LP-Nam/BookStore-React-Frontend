import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Content from "./Content";
import React from "react";
import BookByCategory from "./BookByCategory";
import BookByPublisher from "./BookByPublisher";
import BookDetail from "./BookDetail";
import AccountRegister from "./AccountRegister";

import ContentAdmin from "../admin/Content";
import ListBook from "../admin/ListBook";
import ListBookType from "../admin/ListBookType";
import ListPublisher from "../admin/ListPublisher";
import ListAccount from "../admin/ListAccount";

const MainRouter = () =>(
    <Switch>
        <Route exact path='/' component={Content}/>
        <Route path='/category/:id' component={BookByCategory}/>
        <Route path='/AccountRegister' component={AccountRegister}/>
        <Route path='/publisher/:id' component={BookByPublisher}/>
        <Route path='/product/:bookid' component={BookDetail}/>
        
        <Route path='/admin' component={ContentAdmin}/>
        <Route path='/admin/ListBook' component={ListBook}/>
        <Route path='/admin/ListBookType' component={ListBookType}/>
        <Route path='/admin/ListPublisher' component={ListPublisher}/>
        <Route path='/admin/ListAccount' component={ListAccount}/>
    </Switch>
);

export default MainRouter;