import React from "react";
import OrderBill from "./OrderBill";
import Search from "./SearchOrderBill";
class ListOrderBill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsListOrderBill: [{}]
        }
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/admin/ListOrderBill', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        itemsListOrderBill: result
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
        const items = this.state.itemsListOrderBill.map((value, index) => {
            const MaDonHang = value.MaDonDatHang;
            const MaKhachHang = value.MaTaiKhoan;
            const MaTinhTrang = value.MaTinhTrang;
            const TenTinhTrang = value.TenTinhTrang;
            const NgayLap = value.NgayLap;
            const TongTien = value.TongThanhTien;
            return (
                <OrderBill id={MaDonHang}
                    key={"key_" + MaDonHang}
                    makhachhang={MaKhachHang}
                    matinhtrang={MaTinhTrang}
                    tentinhtrang={TenTinhTrang}
                    ngaylap={NgayLap}
                    tongtien={TongTien}
                />
            );
        });
        return (

            <div>
                <Search />
                <table className="table table-striped" id="orderList">
                    <thead>
                        <tr className="nb active">
                            <td>Mã Đơn Hàng</td>
                            <td>Mã Khách Hàng</td>
                            <td>Tổng tiền</td>
                            <td>Ngày lập đơn</td>
                            <td colSpan="4">Trạng thái</td>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                        {/*chi tiết hóa đơn*/}
                        <tr className="hidden">
                            {/* include('templates/DonDatHang/tempChiTietDonDatHang.php'); */}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ListOrderBill;