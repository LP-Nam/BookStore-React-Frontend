import React from "react";
class AccountInfo extends React.Component{
    render()
    {
        return(
            <ul class="nav navbar-nav pull-right">
                <li><a href="#">Tên tài khoản</a></li>
                <li><a href="../"> Trang khách hàng</a></li>
                <li><a href="index.php?a=50"> Đăng xuất</a></li>
            </ul>
        )
    }
}
export default AccountInfo;