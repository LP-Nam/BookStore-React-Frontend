import React from "react";
import {Link} from "react-router-dom";

class AccountInfo extends React.Component{

    DangXuatHandle=()=>{
        localStorage.removeItem('token');
    } 

    render()
    {
        return(
            <ul className="nav navbar-nav pull-right">
                <li><a href="#">Tên tài khoản</a></li>
                <li><Link to="/"> Trang khách hàng</Link></li>
                <li onClick={this.DangXuatHandle}><Link to="/"> Đăng xuất</Link></li>
            </ul>
        )
    }
}
export default AccountInfo;