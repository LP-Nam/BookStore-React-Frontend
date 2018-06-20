import React from "react";
import Search from "./SearchBook";
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Top10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsListBook: [{}]
        }
    }

    fecthApi = () => {
        fetch('http://localhost:3001/api/admin/product/top10', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        itemsListBook: result
                    });
                },

                (error) => {
                    this.setState({
                        error
                    });
                }
            );
    }

    componentDidMount() {
        this.fecthApi()
    }

    render() {
        var stt=0;
        const items = this.state.itemsListBook.map((value, index) => {
            const TenSach = value.TenSanPham
            const TenTacGia = value.TenTacGia
            const TenLoaiSanPham = value.TenLoaiSanPham
            const TenNXB = value.TenHangSanXuat
            const slBan = value.SoLuongBan
            const SoLuong = value.SoLuongTon
            const MaSach = value.MaSanPham
            stt++;
            return (
                <tr key={"key_" + MaSach}>
                    <td>{stt}</td>
                    <td>{MaSach}</td>
                    <td>{TenSach}</td>
                    <td>{TenTacGia}</td>
                    <td>{TenLoaiSanPham}</td>
                    <td>{TenNXB}</td>
                    <td>{slBan}</td>
                    <td>{SoLuong}</td>
                </tr>
            );
        });
        return (
            <div>
                <table className="table table-striped" id="orderList">
                    <thead>
                        <tr className="nb active">
                            <td>STT</td>
                            <td>Mã</td>
                            <td>Tên</td>
                            <td>Tác giả</td>
                            <td>Thể loại</td>
                            <td>NXB</td>
                            <td>Số Lượng Bán</td>
                            <td>Số lượng Tồn</td>
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
export default Top10;