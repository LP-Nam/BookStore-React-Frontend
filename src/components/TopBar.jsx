import React, {Component} from "react";
import {BrowserRouter,Route,	Link	} from 'react-router-dom'
class TopBar extends React.Component{
    render(){
        return(
            <div className="container" id="topBar">
                <div className="navbar navbar-inverse">
                    <ul className="nav navbar-nav pull-right">
                        <li className="frmLogin">
                            <form>
                                <input type="text" className="form-control" placeholder="Tên đăng nhập" name="username" id="txtUsername"></input>
                                <input type="password" className="form-control" placeholder="Mật khẩu" name="password" id="txtPassword"></input>
                                <button type="submit" className="btn">Đăng nhập</button>
                            </form>
                         </li>
                        <li><Link to="/AccountRegister"><button class="btn">Đăng Kí</button></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default TopBar;