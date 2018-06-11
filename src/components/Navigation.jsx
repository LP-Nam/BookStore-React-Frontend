import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
    render() {
        let styleCmt = {
            width: 100,
            height: 50,
        };

        return (
            <div className="container" id="navigation">
                <div className="navbar navbar-inverse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to='/'>TRANG CHỦ</Link></li>
                        <li>
                            <button type="button" class="btn btn-default btn-sm" style={styleCmt}>
                                <span class="glyphicon glyphicon-shopping-cart"></span> <b>Giỏ Hàng</b>
                            </button>
                        </li>
                        <div id="ex2">
                            <span class="fa-stack fa-5x has-badge" data-count="2">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                    </ul>
                    <form action="index.php" method="get" className="navbar-form navbar-right" id="searchBox">
                        <input type="hidden" name="a" value="5"></input>
                        <div className="input-group">
                            <input type="search" name="TenSach" id="TuKhoa" placeholder="Tên sách" className="form-control"></input>
                            {/* <span className="input-group-btn">
                                <button type="button" className="btn btn-default" onclick="TimKiemNangCao();">Tuỳ chọn</button>
                            </span> */}
                        </div>
                        <button type="submit" className="btn"><span className="glyphicon glyphicon-search"></span></button>
                        <div id="advSearch">
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}
export default Navigation;