import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import ListOrderBill from "./ListOrderBill";
import React from "react";
import ListBook from "./ListBook";
import ListBookType from "./ListBookType";
import ListPublisher from "./ListPublisher";
import ListAccount from "./ListAccount";
import UpdateOrderBill from "./UpdateOrderBill";
import UpdateBook from "./UpdateBook";
import addBook from "./addBook";
import UpdateBookType from "./UpdateBookType";
import addBookType from "./addBookType";
import UpdatePubliser from "./UpdatePublisher";
import addPubliser from "./addPublisher";
import UpdatePublisher from "./UpdatePublisher";
import UpdateAccount from "./UpdateAccount";
import OrderbillDetail from "./OrderbillDetail";
import Top10 from "./Top10";

const MainRouterAdmin = () =>(
    <Switch>
        <Route exact path='/admin' component={ListOrderBill}/>
        <Route path='/admin/ListBook' component={ListBook}/>
        <Route path='/admin/ListBookType' component={ListBookType}/>
        <Route path='/admin/ListPublisher' component={ListPublisher}/>
        <Route path='/admin/ListAccount' component={ListAccount}/>

        <Route path='/admin/UpdateOrderBill/:id' component={UpdateOrderBill}/>
        <Route path='/admin/UpdateBook/:id' component={UpdateBook} />
        <Route path='/admin/addBook' component={addBook} />
        <Route path='/admin/UpdateBookType/:id' component={UpdateBookType} />
        <Route path='/admin/addBookType' component={addBookType} />
        <Route path='/admin/UpdatePubliser/:id' component={UpdatePublisher} />
        <Route path='/admin/addPubliser' component={addPubliser} />
        <Route path='/admin/UpdateAccount/:id' component={UpdateAccount} />
        <Route path='/admin/OrderbillDetail/:id' component={OrderbillDetail} />
        <Route path='/admin/Top10' component={Top10} />
    </Switch>
);

export default MainRouterAdmin;