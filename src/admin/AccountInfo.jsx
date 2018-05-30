import React from "react";
import {Link} from "react-router-dom";

class AccountInfo extends React.Component{
    render()
    {
        return(
            <ul className="nav navbar-nav pull-right">
                <li><a href="#">Tên tài khoản</a></li>
                <li><Link to="/"> Trang khách hàng</Link></li>
                <li><a href="#"> Đăng xuất</a></li>
            </ul>
        )
    }
}
export default AccountInfo;