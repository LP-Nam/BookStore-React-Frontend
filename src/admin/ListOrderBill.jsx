import React from "react";
import OrderBill from "./OrderBill"
class ListOrderBill extends React.Component{
    render()
    {
        return(
            <div>    
                <table className="table table-striped" id="orderList">
                    <tr className="nb active">
                        <td>Mã Đơn Hàng</td>
                        <td>Mã Khách Hàng</td>
                        <td>Tổng tiền</td>
                        <td>Ngày lập đơn</td>
                        <td colspan="4">Trạng thái</td>
                    </tr>
                    <OrderBill />
                    <OrderBill />
                    <tr className="hidden">
                        {/* include('templates/DonDatHang/tempChiTietDonDatHang.php'); */}
                    </tr>
                        
                </table>
            </div>
        )
    }
}
export default ListOrderBill;