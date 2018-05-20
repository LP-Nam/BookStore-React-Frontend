import React from "react";
import OrderBill from "./OrderBill";
import Search from "./SearchOrderBill";
class ListOrderBill extends React.Component{
    render()
    {
        return(
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
                        <OrderBill />
                        <OrderBill />
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