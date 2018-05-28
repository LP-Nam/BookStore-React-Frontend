import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ListOrderBill from "./ListOrderBill";
import React from "react";
import ListBook from "./ListBook";
import ListBookType from "./ListBookType";
import ListPublisher from "./ListPublisher";
<<<<<<< HEAD:src/admin/MainRouter.jsx
import ListAccount from "./ListAccount";
import UpdateOrderBill from "./UpdateOrderBill";
const MainRouter = () =>(
    <Switch>
        <Route exact path='/admin' component={ListOrderBill}/>
        <Route path='/admin/ListBook' component={ListBook}/>
        <Route path='/admin/ListBookType' component={ListBookType}/>
        <Route path='/admin/ListPublisher' component={ListPublisher}/>
        <Route path='/admin/ListAccount' component={ListAccount}/>

        <Route path='/admin/UpdateOrderBill/:id' component={UpdateOrderBill}/>
=======
import ListAccount from "./ListAccount"
const MainRouterAdmin = () =>(
    <Switch>
        <Route exact path='/admin' component={Content}/>
        <Route path='/ListBook' component={ListBook}/>
        <Route path='/ListBookType' component={ListBookType}/>
        <Route path='/ListPublisher' component={ListPublisher}/>
        <Route path='/ListAccount' component={ListAccount}/>
>>>>>>> 47ea15a5f325c3d15d2453887323a4b16900fb6e:src/admin/MainRouterAdmin.jsx
    </Switch>
);

export default MainRouterAdmin;