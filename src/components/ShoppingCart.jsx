import React from "react";
import CartContent from "./CartContent";

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: localStorage.getItem('carts') ? localStorage.getItem('carts') : null,
            TongTien: 0
        }
    }

    HuyTatCa = () => {
        // localStorage.removeItem('countCart');
        localStorage.removeItem('carts');
        this.setState({
            items: null
        })
    }

    Huy1Sach = (maSach) => {

        // let precount = localStorage.getItem('countCart');
        // let countCart = parseInt(precount) - 1;

        let carts = JSON.parse(localStorage.getItem('carts'));
        let ds = carts['danhsach'];

        let idx = -1;
        for (let i = 0; i < ds.length; i++) {
            if (ds[i].MaSanPham == maSach) {
                idx = i;
                break;
            }
        }

        if (idx > -1) {
            carts['danhsach'].splice(idx, 1);
            // localStorage.setItem('countCart', countCart);
            localStorage.setItem('carts', JSON.stringify(carts));
            this.setState({ items: JSON.stringify(carts) });
        }
    }

    render() {
        let carts = JSON.parse(this.state.items);
        var cardsContent = null;

        var tmptt = 0;

        if (carts) {
            cardsContent = carts['danhsach'].map((sach, index) => {
                const ma = sach.MaSanPham;
                var sl = sach.SoLuong;

                console.log(parseInt(sl));
                console.log(parseInt(sach.GiaSanPham));
                tmptt += parseInt(sl) * parseInt(sach.GiaSanPham);

                return (
                    <CartContent key={ma} MaSanPham={ma} SoLuong={sl} handleClickHuy={() => this.Huy1Sach(ma)} />
                );
            });
        }

        tmptt = (tmptt).toLocaleString('en');

        return (
            <React.Fragment>
                <div class='alert alert-danger'>Thông báo gì đó</div>
                <table class="table table-striped" id="cartItems">
                    <tr class="nb">
                        <td></td>
                        <td></td>
                        <td><button class="btn btn-danger">Đặt hàng</button></td>
                        <td><button class="btn btn-primary" onClick={this.HuyTatCa}>Hủy tất cả</button></td>
                    </tr>
                    <tr>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        {/* <th></th>
                        <th></th> */}
                    </tr>
                    {cardsContent}
                    <tr>
                        <td></td>
                        <td>Tổng tiền: </td>
                        <b>{tmptt} VNĐ</b>
                    </tr>
                </table>
            </React.Fragment>
        )
    }
}

export default ShoppingCart;