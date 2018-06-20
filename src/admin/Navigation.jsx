import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class Navigation extends React.Component{
    render(){
        return(
            <div className="container" id="navigation">
                <div className="navbar navbar-inverse">
                    <ul className="nav navbar-nav" id="menu">
                        <li><Link to="/admin">Đơn đặt hàng</Link></li>
                        <li><Link to="/admin/ListBook">Sách</Link></li>
                        <li><Link to="/admin/ListBookType">Thể loại sách</Link></li>
                        <li><Link to="/admin/ListPublisher">Nhà xuất bản</Link></li>
                        <li><Link to="/admin/ListAccount">Quản lý tài khoản</Link></li>
                        <li><Link to="/admin/Top10">| Thống kê TOP 10 sản phẩm bán chạy</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navigation;