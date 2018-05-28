import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Content from "./Content";
import React from "react";
import BookByCategory from "./BookByCategory";
import BookByPublisher from "./BookByPublisher";
import BookDetail from "./BookDetail";
import AccountRegister from "./AccountRegister";
<<<<<<< HEAD
=======

import "../mystyle.css";
import Main from "../admin/Main";

>>>>>>> 47ea15a5f325c3d15d2453887323a4b16900fb6e
const MainRouter = () =>(
    <Switch>
        <Route exact  path='/' component={Content}/>
        <Route path='/category/:id' component={BookByCategory}/>
        <Route path='/AccountRegister' component={AccountRegister}/>
        <Route path='/publisher/:id' component={BookByPublisher}/>
<<<<<<< HEAD
        <Route path='/product/:bookid' component={BookDetail}/>   
=======
        <Route path='/product/:bookid' component={BookDetail}/>
        
        <Route path='/admin' component={Main}/>
        {/* <Route path='/ListBook' component={ListBook}/>
        <Route path='/admin/ListBookType' component={ListBookType}/>
        <Route path='/admin/ListPublisher' component={ListPublisher}/>
        <Route path='/admin/ListAccount' component={ListAccount}/> */}
>>>>>>> 47ea15a5f325c3d15d2453887323a4b16900fb6e
    </Switch>
);

export default MainRouter;