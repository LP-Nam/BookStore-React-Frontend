import React from "react";
import BookDetailBottom from "./BookDetailBottom";
import jwtDecode from "jwt-decode";

class BookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{}],
            inputQuanity: "1"
        }
    }

    fetchAPI = (id) => {
        fetch(`http://localhost:3001/api/product/${id}`)
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

    componentDidMount() {
        this.fetchAPI(this.props.match.params.bookid);
    }

    componentWillReceiveProps(newprops) {
        this.fetchAPI(newprops.match.params.bookid);
    }

    render() {
        let gioHang = null;
        let token = localStorage.getItem('token');
        if (token) {
            let user = jwtDecode(token);
            if (user) {
                gioHang = (<li className="list-group-item">
                    <form action="" method="post">
                        <button type="Submit" className="btn btn-danger" >Đặt vào giỏ hàng</button>
                        Số lượng: <input type="text"  defaultValue="1" className="list-group-item" name="txtSoLuongNhap" id="txtSoLuongNhap" />
                    </form>
                </li>);
            }
        }

        return (
            <React.Fragment>
                <div className="clearfix" id="productDetail">
                    <div className="w40p thumbnail pull-left">
                    <img src={process.env.PUBLIC_URL + `/images/Product/${this.state.items[0].HinhURL}`} alt={`${this.state.items[0].TenSanPham}`} />
                    </div>
                    <div className="w60p pull-right">
                        <ul>
                            <li className="list-group-item"><h2>{this.state.items[0].TenSanPham}</h2></li>
                            <li className="list-group-item"><b>Tác giả: </b>{this.state.items[0].TenTacGia}</li>
                            <li className="list-group-item"><b>Nhà xuất bản: </b>{this.state.items[0].TenHangSanXuat}</li>
                            <li className="list-group-item"><b>Thể loại: </b>{this.state.items[0].TenLoaiSanPham}</li>
                            <li className="list-group-item"><b>Giới thiệu: </b>{this.state.items[0].MoTa}</li>
                            <li className="list-group-item"><b>Số lượng còn:</b>{this.state.items[0].SoLuongTon} quyển</li>
                            <li className="list-group-item"><h4>Giá: <span className="price">{this.state.items[0].GiaSanPham} VNĐ</span></h4></li>
                            {gioHang}
                        </ul>
                    </div>
                </div>
                <BookDetailBottom MaSanPham={this.state.items[0].MaSanPham} MaLoaiSanPham={this.state.items[0].MaLoaiSanPham} />

            </React.Fragment>
        );
    }
}

export default BookDetail;