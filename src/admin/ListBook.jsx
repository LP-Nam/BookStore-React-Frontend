import React from "react";
import Book from "./Book";
import Search from "./SearchBook";
class ListBook extends React.Component{
    constructor(props){
        super(props);
        this.state={
            itemsListBook: [{}]
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3001/api/admin/ListBook`)
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          this.setState({
            itemsListBook: result
          });
        },

        (error) => {
          this.setState({
            error
          });
        }
      );
    }
    render()
    {
        const items = this.state.itemsListBook.map((value, index) => {
            const TenSach = value.TenSanPham
            const TenTacGia = value.TenTacGia
            const TenLoaiSanPham = value.TenLoaiSanPham
            const TenNXB = value.TenHangSanXuat
            const Gia = value.GiaSanPham
            const BiXoa = value.BiXoa
            const SoLuong = value.SoLuongTon
			return (
                <Book 
                    tensach={TenSach}
                    tentacgia = {TenTacGia}
                    tenloaisanpham = {TenLoaiSanPham}
                    tennxb = {TenNXB}
                    gia = {Gia}
                    soluong = {SoLuong}
                    bixoa = {BiXoa}
                />
			);
		});
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
                        {items}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ListBook;