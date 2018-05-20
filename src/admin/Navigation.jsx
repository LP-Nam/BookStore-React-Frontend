import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class Navigation extends React.Component{
    render(){
        return(
            <div className="container" id="navigation">
                <div className="navbar navbar-inverse">
                    <ul className="nav navbar-nav" id="menu">
                        <li><Link to="/">Đơn đặt hàng</Link></li>
                        <li><Link to="/ListBook">Sách</Link></li>
                        <li><Link to="/ListBookType">Thể loại sách</Link></li>
                        <li><Link to="/ListPublisher">Nhà xuất bản</Link></li>
                        <li><Link to="/ListAccount">Quản lý tài khoản</Link></li>		
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navigation;