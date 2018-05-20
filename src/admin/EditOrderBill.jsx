import React, { Component } from 'react';

class EditOrderBill extends Component {
    render() {
        return (
            <div>
                <div className="panel">
                    <h2 className="page-header text-center">Sửa đơn đặt hàng #</h2>
                    <div className="panel-body">
                        <form action="" method="post" className="frmEdit w40p center-block">
                            Ngày tạo: 
                            <input type="datetime-local" className="form-control" name="NgayLap"></input>
                            Mã khách hàng: 
                            <input type="text" className="form-control" placeholder="Mã KH" name="MaKhachHang"></input>
                            Tổng tiền: 
                            <input type="text" className="form-control" placeholder="Tổng tiền" name="TongThanhTien"></input>
                            Trạng thái: 
                            <select className="form-control" name="TrangThai" id="cbbStatus">
                                <option value="" className="hidden">-- Chọn trạng thái --</option>   
                            </select>
                            <br></br>
                            <button type="submit" className="btn btn-primary center-block">Sửa</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditOrderBill;