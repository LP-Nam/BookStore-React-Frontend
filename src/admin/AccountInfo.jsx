import React from "react";
class AccountInfo extends React.Component{
    render()
    {
        return(
            <ul className="nav navbar-nav pull-right">
                <li><a href="#">Tên tài khoản</a></li>
                <li><a href="#"> Trang khách hàng</a></li>
                <li><a href="#"> Đăng xuất</a></li>
            </ul>
        )
    }
}
export default AccountInfo;