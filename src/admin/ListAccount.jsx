import React, { Component } from 'react';
import Account from "./Account";
class ListAccount extends Component {
    render() {
        return (
            <div>
                <form  className="navbar-form pull-right" id="searchBox">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Tên đăng nhập"  ></input>
                    </div>
                    <button type="submit" className="btn"><span className="glyphicon glyphicon-search"></span></button>
                </form>
                <table className="table table-striped" id="orderList">
                    <thead>
                        <tr className="nb active">
                            <td>Mã</td>
                            <td>Tên Đăng Nhập</td>
                            <td>Loại Tài Khoản</td>
                            <td>Tên Hiển Thị</td>
                            <td>Điện Thoại</td>
                            <td>Địa Chỉ</td>
                            <td colSpan="3">Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        <Account />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListAccount;