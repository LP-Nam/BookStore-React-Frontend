import React from "react";
import { Link, Redirect } from 'react-router-dom';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'ok',
            token: '',
            isLogined: false
        }
    }

    onClickHandle = () => {
        this.setState({message:'ok'});
        fetch("http://localhost:3001/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.refs.usr.value,
                password: this.refs.pass.value,
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    // save  localStoraged
                    if (result.message == 'ok') {
                        localStorage.setItem('token', result.token);
                    }
                    // direct /account
                    this.setState({
                        message: result.message,
                        token: result.token,
                        isLogined: result.message == 'ok' ? true : false,
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
        if (this.state.isLogined) {
            return <Redirect to="/" />
        }
        let msg = this.state.message != 'ok' ? (<div class="alert alert-danger">
            <strong>Đăng nhập không thành công!</strong> Sai <strong>Tên Đăng Nhập</strong> hoặc <strong>Mật Khẩu</strong>
      </div>) : null;
        return (
            <div className="container" id="topBar">
                <div className="navbar navbar-inverse">
                    <ul className="nav navbar-nav pull-right">
                        <li className="frmLogin">
                            <form>
                                <input ref='usr' type="text" className="form-control" placeholder="Tên đăng nhập" name="username" id="txtUsername"></input>
                                <input ref='pass' type="password" className="form-control" placeholder="Mật khẩu" name="password" id="txtPassword"></input>
                                <button type='button' className="btn" onClick={this.onClickHandle}>Đăng nhập</button>
                            </form>
                        </li>
                        <li><Link to="/AccountRegister"><button className="btn">Đăng Kí</button></Link></li>
                    </ul>
                    {msg}
                </div>
            </div>
        );
    }
}
export default SignIn;