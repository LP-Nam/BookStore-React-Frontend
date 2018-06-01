import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

class AccountRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameValid: false,
            passwordValid: false,
            emailValid: false,
            formValid: false,
            TenDangNhap: '',
            MatKhau: '',
            NhapLaiMatKhau: '',
            HoTen: '',
            DiaChi: '',
            Email: '',
            DienThoai: '',
        };
    }

    TenDangNhaponChangeHandle = (e) => {
        this.setState({
            TenDangNhap: e.target.value,
        });
        this.KiemTraUsernameTonTai();
        if(this.state.checkUsername==1){
            this.setState({formValid:false});
            alert('Tên đăng nhập đã tồn tại');
        }
    }

    KiemTraUsernameTonTai = () => {
        fetch(`http://localhost:3001/api/checkUsername/${this.refs.txtTenDangNhap.value}`)
            .then(res => res.json())
            .then(
                (result) => {
                    let tmp = result[0].sl;
                    this.setState({
                        checkUsername: tmp,
                    });
                },

                (error) => {
                    this.setState({
                        error
                    });
                }
            );
    }

    KiemTraThongTin = () => {
        if (this.state.TenDangNhap == "") {
            this.setState({formValid:false});
            alert("Tên đăng nhập không được để trống");
        }
        if (this.state.MatKhau.length < 8) {
            this.setState({formValid:false});
            alert("Độ dài mật khẩu phải 8 kí tự trở lên");
        }
        if (this.state.MatKhau != this.state.NhapLaiMatKhau) {
            this.setState({formValid:false});
            alert("Nhập lại mật khẩu không khớp");
        }
        if (this.state.HoTen == "") {
            this.setState({formValid:false});
            alert("Họ tên không được để trống");
        }

        var emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (this.state.Email.length == 0 || !emailPattern.test(this.state.Email)) {
            this.setState({formValid:false});
            alert("Email không hợp lệ");
        }
        this.setState({formValid:true});
    }

    onClickHandle = () => {
        if (this.KiemTraThongTin()) {
            fetch("http://localhost:3001/api/register", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    TenDangNhap: this.state.TenDangNhap,
                    MatKhau: this.state.MatKhau,
                    TenHienThi: this.state.HoTen,
                    DiaChi: this.state.DiaChi,
                    DienThoai: this.state.DienThoai,
                    Email: this.state.Email,
                })
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result);
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
    }

    handleUserInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, this.KiemTraThongTin);
    }

    render() {
        return (
            <div class="w100p well">
                <form class="w60p center-block">
                    <h2 class="page-header text-center">Đăng ký tài khoản</h2>
                    <p>Tên đăng nhập: <input class="form-control" type="text" id="txtTenDangNhap" name="TenDangNhap" value={this.state.TenDangNhap} onChange={this.handleUserInput} /></p>
                    <p>Mật khẩu: <input class="form-control" type="password" id="txtMatKhau" name="MatKhau" value={this.state.MatKhau} onChange={this.handleUserInput} ></input></p>
                    <p>Nhập lại mật khẩu: <input class="form-control" type="password" id="NhapLaiMatKhau" value={this.state.NhapLaiMatKhau} onChange={this.handleUserInput} ></input></p>
                    <p>Họ tên: <input class="form-control" type="text" id="txtHoTen" name="HoTen" value={this.state.HoTen} onChange={this.handleUserInput} ></input></p>
                    <p>Điện thoại: <input class="form-control" type="text" id="txtDienThoai" name="DienThoai" value={this.state.DienThoai} onChange={this.handleUserInput} ></input></p>
                    <p>Địa chỉ: <input class="form-control" type="text" id="txtDiaChi" name="DiaChi" value={this.state.DiaChi} onChange={this.handleUserInput} ></input></p>
                    <p>Email: <input class="form-control" type="email" id="txtEmail" name="Email" placeholder="example@gmail.com" value={this.state.Email} onChange={this.handleUserInput} ></input></p>
                    <p><button type='button' class="btn btn-primary center-block" onClick={this.onClickHandle}>Đăng ký</button></p>
                </form>
            </div>
        )
    }
}
export default AccountRegister;