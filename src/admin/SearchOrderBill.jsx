import React from "react";
class SearchOrderBill extends React.Component{
    render()
    {
        return(
            <form  className="navbar-form pull-right" id="searchBox">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Mã Khách Hàng" name="MaKhachHang" ></input>
                </div>
                <button type="submit" className="btn"><span className="glyphicon glyphicon-search"></span></button>
            </form>
        )
    }
}
export default SearchOrderBill;