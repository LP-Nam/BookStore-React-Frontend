// import React from "react";

// class ShoppingCart extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//       return(
//         {/* <?php changeTitle("Giỏ hàng của tôi"); ?>

// <?php 
// 	if (isset($_GET['check']) && $_GET['check'] == 1) 
//     {
// 		$ThongBao = "đặt hàng thành công";
// ?>
//     <div class='alert alert-success'><?php echo $ThongBao; ?></div>
// <?php
//     } 
//      else if (isset($_GET['check']) && $_GET['check'] == 0) 
//         {
// 			$ThongBao = "không thể đặt hàng";
// ?>
//     <div class='alert alert-danger'><?php echo $ThongBao; ?></div>
// <?php 
// 		}
// ?>
// <?php
// 	if(isset($_SESSION["MaTaiKhoan"]))
// 	{
//  ?> */}
// <table class="table table-striped" id="cartItems">
// 	<tr class="nb">
// 		<td>
// 		</td>
// 		<td></td>
// 		<td><button class="btn btn-danger" onclick="">Đặt hàng</button></td>
// 		<td><button class="btn btn-primary" onclick="">Hủy tất cả</button></td>
// 	</tr>
// 	<tr>
// 		<th>Sản phẩm</th>
// 		<th>Số lượng</th>
// 		<th></th>
// 		<th></th>
// 	</tr>
// 	<?php
// 		$TongTien = 0;
//             if(isset($_SESSION["gioHang"]))
//             {
//                 $gioHang = unserialize($_SESSION["gioHang"]);
// 				if(count($gioHang->listProduct) > 0)
// 				{
// 					foreach($gioHang->listProduct as $p)
// 					{
// 						$query ="   SELECT sp.SoLuongTon, sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL
// 									from sanpham sp
// 									where sp.BiXoa = FALSE and MaSanPham = $p->id";
// 						$result = Provider::execQuery($query);
// 						$row = mysqli_fetch_array($result);
	
// 						$TenSanPham = $row['TenSanPham'];
// 						$MaSanPham = $p->id;
// 						$HinhURL = $row['HinhURL'];
// 						$GiaSanPham = $row['GiaSanPham'];
// 						$TenTacGia = $row['TenTacGia'];
// 						$SoLuong = $p->num;
// 						$SoLuongTon = $row["SoLuongTon"];
// 						include("templates/tmpGioHang.php");
// 						$TongTien += $p->num * $GiaSanPham;
// 					}
// 				}
               
//             }
// 	?>
// 	<tr>
// 		<td></td>
// 		<td></td>
// 		<td></td>
// 		<td>
// 		Tổng Tiền:
// 			<?php 
// 					echo "<b>".number_format($TongTien) ." VNĐ </b>";
// 					 $_SESSION["TongTien"] = $TongTien; 
// 			?>
// 		</td>
// 	</tr>
// </table>
// 		<?php } else { Provider::ChangeURL("index.php?a=0&id=7"); }?>


//       );
//     };
// }