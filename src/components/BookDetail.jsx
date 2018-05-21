import React from "react";
import BookDetailBottom from "./BookDetailBottom";

class BookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{}]
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
        return (
            <React.Fragment>
                <div class="clearfix" id="productDetail">
                    <div class="w40p thumbnail pull-left">
                        <img src={process.env.PUBLIC_URL + `/images/Product/${this.state.items[0].HinhURL}`} alt={`${this.state.items.TenSanPham}`} />
                    </div>
                    <div class="w60p pull-right">
                        <ul>
                            <li class="list-group-item"><h2>{this.state.items[0].TenSanPham}</h2></li>
                            <li class="list-group-item"><b>Tác giả: </b>{this.state.items[0].TenTacGia}</li>
                            <li class="list-group-item"><b>Nhà xuất bản: </b>{this.state.items[0].TenHangSanXuat}</li>
                            <li class="list-group-item"><b>Thể loại: </b>{this.state.items[0].TenLoaiSanPham}</li>
                            <li class="list-group-item"><b>Giới thiệu: </b>{this.state.items[0].MoTa}</li>
                            <li class="list-group-item"><b>Số lượng còn:</b>{this.state.items[0].SoLuongTon} quyển</li>
                            <li class="list-group-item"><h4>Giá: <span class="price">{this.state.items[0].GiaSanPham} VNĐ</span></h4></li>
                            {/* <li class="list-group-item">
                        <form action="" method="post">
                                <button type="Submit" class="btn btn-danger" onclick="">Đặt vào giỏ hàng</button>
                                Số lượng: <input type="text" value="1" class="list-group-item" name="txtSoLuongNhap" id="txtSoLuongNhap" />>
                        </form>
                        </li> */}
                        </ul>
                    </div>
                </div>
                <BookDetailBottom MaSanPham={this.state.items[0].MaSanPham} MaLoaiSanPham={this.state.items[0].MaLoaiSanPham} />

            </React.Fragment>
        );
    }
}

export default BookDetail;