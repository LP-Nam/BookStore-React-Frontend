import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Content from "./Content";
import React from "react";
import BookByCategory from "./BookByCategory";
import BookByPublisher from "./BookByPublisher";

const MainRouter = () =>(
    <Switch>
        <Route exact path='/' component={Content}/>
        <Route path='/category/:id' component={BookByCategory}/>
        <Route path='/publisher/:id' component={BookByPublisher}/>
    </Switch>
);

export default MainRouter;