import React from "react";
import jwtDecode from 'jwt-decode';
import "../mystyle.css";

class InfoAccount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            token: '',
            TenHienThi: '',
        }
    }

    render() {
        let token = localStorage.getItem('token');
        let user = jwtDecode(token);
        let TenHienThi = user.TenHienThi;
        let loaiTK = user.MaLoaiTaiKhoan;
        return(
            <div className="container" id="topBar">
                <div className="navbar navbar-inverse">
                    <ul className="nav navbar-nav pull-right">
                        <li><a href="#">Hello {TenHienThi}</a></li>
                        <li><a href="#"> Đăng xuất</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default InfoAccount;