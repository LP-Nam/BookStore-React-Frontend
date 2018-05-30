import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import "../mystyle.css";

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            token: '',
            isLogined: false
        }
    }

    onClickHandle = () => {
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
                    console.log(result);
                    // save  localStoraged
                    if (result.message == 'ok') {
                        localStorage.setItem('token', JSON.stringify(result.token));
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
        //alert(this.state.token.jwt_payload.TenHienThi);
    }

    render() {
        if (this.state.isLogined) {
            return <Redirect to="/" />
        }
        let msg = this.state.message!='ok'?this.state.message:'';
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
                </div>
            </div>
        );
    }
}
export default SignIn;