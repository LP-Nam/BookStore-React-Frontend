import React from "react";
import { Link, Redirect } from "react-router-dom";
import Search from "./Search";

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: "hidden",
            countCart: localStorage.getItem('countCart') ? localStorage.getItem('countCart') : 0,
        }
        this.handleOption = this.handleOption.bind(this)
    }

    handleOption() {
        if (this.state.style == "advSearch") {
            this.setState(prevState => ({
                style: "hidden"
            }));
        }
        else {
            this.setState(prevState => ({
                style: "advSearch"
            }));
        }
    }

    render() {
        let styleCmt = {
            width: 100,
            height: 50,
        };

        return (
            <div className="container" id="navigation">
                <div className="navbar navbar-inverse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to='/'><b>TRANG CHỦ</b></Link></li>
                        <li>
                            <Link to="/ShoppingCart">
                                <span class="glyphicon glyphicon-shopping-cart"></span> <b>Giỏ Hàng</b>
                            </Link>
                        </li>
                        <div id="ex2" style={styleCmt}>
                            <span class="fa-stack fa-5x has-badge" data-count={this.state.countCart}>
                            </span>
                        </div>
                    </ul>
                    <form action="/SearchResult" className="navbar-form navbar-right" id="searchBox">
                        <div className="input-group">
                            <input type="search" name="TenSach" id="TuKhoa" placeholder="Tên sách" className="form-control"></input>
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-default" onClick={this.handleOption} >Tuỳ chọn</button>
                            </span>
                        </div>
                        <button type="submit" className="btn"><span className="glyphicon glyphicon-search"></span></button>
                        <div id={this.state.style}>
                            <Search />
                        </div>
                    </form>
                </div>
            </div>

        )
    }
};

export default Navigation;