import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import {  Link } from 'react-router-dom'
class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{}]
        }
    }
    formatDate(Ngay)
    {
        var date = new Date(Ngay);
        return date.toLocaleDateString() +' '+ date.toLocaleTimeString();
    }
    componentDidMount() 
    {
        let token = localStorage.getItem('token');
        let user = jwtDecode(token);
        fetch(`http://localhost:3001/api/history/${user.MaTaiKhoan}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              items: result
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
        const items = this.state.items.map((value, index) => {
            const MaDonHang = value.MaDonDatHang;
            const TenTinhTrang = value.TenTinhTrang;
            const NgayLap = value.NgayLap;
            const TongTien = value.TongThanhTien;
            return (
                <tr key={"key_"+MaDonHang}>
                    <td>{MaDonHang}</td>
                    <td>{TongTien}</td>
                    <td>{this.formatDate(NgayLap)}</td>
                    <td>{TenTinhTrang}</td>
                    <td><Link to={`/HistoryDetail/${MaDonHang}`} ><span className="glyphicon glyphicon-th-list"></span></Link></td>
                </tr>
                
            );
        });
        return (
            <div>
                <table className="table table-striped" id="orderList">
                    <thead>
                        <tr className="nb active">
                            <td>Mã Đơn Hàng</td>
                            <td>Tổng tiền</td>
                            <td>Ngày lập đơn</td>
                            <td>Trạng thái</td>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default History;