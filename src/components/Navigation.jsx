import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD

class Navigation extends React.Component {
    render() {
        let styleCmt = {
            width: 100,
            height: 50,
        };

        return (
=======
import Search from "./Search"
class Navigation extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            style:"hidden"
        }
        this.handleOption = this.handleOption.bind(this)
    }
    handleOption()
    {
        if(this.state.style == "advSearch")
        {
            this.setState(prevState => ({
                style: "hidden"
              }));
        }
        else{
            this.setState(prevState => ({
                style: "advSearch"
              }));
        }
    }
    render()
    {
        return(
>>>>>>> 0c1af3575da73c3aa99c18e2dfec211630f530c9
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
}
export default Navigation;