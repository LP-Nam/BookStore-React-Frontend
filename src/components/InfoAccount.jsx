import React from "react";
import jwtDecode from 'jwt-decode';
import { Link, Redirect } from 'react-router-dom';

class InfoAccount extends React.Component {
    DangXuatHandle=()=>{
        localStorage.removeItem('token');
    }    

    render() {
        let token = localStorage.getItem('token');
        let user = jwtDecode(token);
        let TenHienThi = user.TenHienThi;
        let loaiTK = user.MaLoaiTaiKhoan;
        let tmp = loaiTK == 2 ? (<li><Link to="/admin"> Trang quản lý</Link></li>) : null;
        return (
            <div className="container" id="topBar">
                <div className="navbar navbar-inverse">
                    <ul className="nav navbar-nav pull-right">
                        <li><a href="#">Hello, {TenHienThi}</a></li>
                        {tmp}
                        <li onClick={this.DangXuatHandle}><a href="#"> Đăng xuất</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default InfoAccount;