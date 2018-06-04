import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import ListOrderBill from "./ListOrderBill";
import React from "react";
import ListBook from "./ListBook";
import ListBookType from "./ListBookType";
import ListPublisher from "./ListPublisher";
import ListAccount from "./ListAccount";
import UpdateOrderBill from "./UpdateOrderBill";
import UpdateBook from "./UpdateBook"
const MainRouterAdmin = () =>(
    <Switch>
        <Route exact path='/admin' component={ListOrderBill}/>
        <Route path='/admin/ListBook' component={ListBook}/>
        <Route path='/admin/ListBookType' component={ListBookType}/>
        <Route path='/admin/ListPublisher' component={ListPublisher}/>
        <Route path='/admin/ListAccount' component={ListAccount}/>

        <Route path='/admin/UpdateOrderBill/:id' component={UpdateOrderBill}/>
        <Route path='/admin/UpdateBook/:id' component={UpdateBook} />
    </Switch>
);

export default MainRouterAdmin;