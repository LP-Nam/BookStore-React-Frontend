import React from "react";
import CartContent from "./CartContent";

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: localStorage.getItem('countCart') ? localStorage.getItem('countCart') : 0,
            items: localStorage.getItem('carts') ? localStorage.getItem('carts') : null
        }
    }

    HuyTatCa = () => {
        localStorage.removeItem('countCart');
        localStorage.removeItem('carts');
        this.setState({
            count: 0,
            items: null
        })
    }

    render() {
        let carts = JSON.parse(this.state.items);
        var cardsContent = null;
        if (carts) {
            cardsContent = carts['danhsach'].map((sach, index) => {
                const ma = sach.MaSanPham;
                const sl = sach.SoLuong;
                return (
                    <CartContent key={ma} MaSanPham={ma} SoLuong={sl} />
                );
            });
        }


        return (
            <React.Fragment>
                {/* <?php changeTitle("Giỏ hàng của tôi"); ?>

<?php 
	if (isset($_GET['check']) && $_GET['check'] == 1) 
    {
		$ThongBao = "đặt hàng thành công";
?>
    <div class='alert alert-success'><?php echo $ThongBao; ?></div>
<?php
    } 
     else if (isset($_GET['check']) && $_GET['check'] == 0) 
        {
			$ThongBao = "không thể đặt hàng";
?>
    <div class='alert alert-danger'><?php echo $ThongBao; ?></div>
<?php 
		}
?>
<?php
	if(isset($_SESSION["MaTaiKhoan"]))
	{
 ?> */}
                < table class="table table-striped" id="cartItems" >
                    <tr class="nb">
                        <td>
                        </td>
                        <td></td>
                        <td><button class="btn btn-danger" onclick="">Đặt hàng</button></td>
                        <td><button class="btn btn-primary" onClick={this.HuyTatCa}>Hủy tất cả</button></td>
                    </tr>
                    <tr>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {cardsContent}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </React.Fragment>
        )
    }
}

export default ShoppingCart;