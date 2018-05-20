import React from "react";
import Book from "./Book";
import Search from "./SearchBook";
class ListBook extends React.Component{
    render()
    {
        return(
            <div>
                <Search />
                <table className="table table-striped" id="orderList">
                    <thead>
                        <tr className="nb active">
                            <td>Tên</td>
                            <td>Tác giả</td>
                            <td>Thể loại</td>
                            <td>NXB</td>
                            <td>Giá</td>
                            <td colSpan="3">Số lượng</td>
                        </tr>
                    </thead>
                    <tbody>
                        <Book/>
                        <Book/>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ListBook;