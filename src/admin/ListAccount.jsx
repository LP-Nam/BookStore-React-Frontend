import React, { Component } from 'react';
import Account from "./Account";
class ListAccount extends Component {
    constructor(props){
        super(props);
        this.state={
            itemsListAccount: [{}]
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3001/api/admin/ListAccount`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          this.setState({
            itemsListAccount: result
          });
        },

        (error) => {
          this.setState({
            error
          });
        }
      );
    }
    render() {
        const items = this.state.itemsListAccount.map((value, index) => {
            const MaTaiKhoan = value.MaTaiKhoan
            const TenDangNhap = value.TenDangNhap
            const TenHienThi = value.TenHienThi
            const DienThoai = value.DienThoai
            const DiaChi = value.DiaChi
            const Email = value.Email
            const BiXoa = value.BiXoa
            const TenLoaiTaiKhoan = value.TenLoaiTaiKhoan
			return (
                <Account   mataikhoan ={MaTaiKhoan} 
                           tendangnhap ={TenDangNhap} 
                           tenloaitaikhoan = {TenLoaiTaiKhoan}
                           tenhienthi = {TenHienThi}
                           dienthoai = {DienThoai}
                           diachi = {DiaChi}
                           email = {Email}
                           bixoa = {BiXoa}
                />
			);
		});
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
                        {items}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListAccount;