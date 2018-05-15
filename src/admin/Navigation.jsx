import React from "react"
class Navigation extends React.Component{
    render(){
        return(
            <div className="container" id="navigation">
                <div className="navbar navbar-inverse">
                    <ul class="nav navbar-nav" id="menu">
                        <li><a href="index.php?a=2">Đơn đặt hàng</a></li>
                        <li><a href="index.php?a=3">Sách</a></li>
                        <li><a href="index.php?a=4">Thể loại sách</a></li>
                        <li><a href="index.php?a=5">Nhà xuất bản</a></li>
                        <li><a href="index.php?a=6">Quản lý tài khoản</a></li>		
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navigation;