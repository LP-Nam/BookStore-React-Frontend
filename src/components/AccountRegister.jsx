import React from "react"
class AccountRegister extends React.Component{
    render()
    {
        return(
            <div class="w100p well">
                <form action="index.php?a=15" method="post" class="w60p center-block" onsubmit="return KiemTraThongTinDangKi();">
                    <h2 class="page-header text-center">Đăng ký tài khoản</h2>
                    <p>Tên đăng nhập: <input class="form-control" type="text" id="txtTenDangNhap" name="txtTenDangNhap"></input></p>
                    <p>Mật khẩu: <input class="form-control" type="password" id="txtMatKhau" name="txtMatKhau"></input></p>
                    <p>Nhập lại mật khẩu: <input class="form-control" type="password" id="txtNhapLaiMatKhau"></input></p>
                    <p>Họ tên: <input class="form-control" type="text" id="txtHoTen" name="txtHoTen"></input></p> 	  	 	
                    <p>Điện thoại: <input class="form-control" type="text" id="txtDienThoai" name="txtDienThoai"></input></p>
                    <p>Địa chỉ: <input class="form-control" type="text" id="txtDiaChi" name="txtDiaChi"></input></p>
                    <p>Email: <input class="form-control" type="email" id="txtEmail" name="txtEmail" placeholder="example@gmail.com"></input></p>
                     <p><button type="submit" class="btn btn-primary center-block">Đăng kí</button></p> 
                </form>
            </div>
        )
    }
}
export default AccountRegister;