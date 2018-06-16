import React from "react";
import BookDetailBottom from "./BookDetailBottom";
import jwtDecode from "jwt-decode";
import $ from "jquery";

class BookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{}],
            inputQuanity: "1",
            tongSoBinhLuan: 0,
            isCartSuccess: false,
        }
    }

    fetchAPI = (id) => {
        fetch(`http://localhost:3001/api/product/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result[0]
                    });
                },

                (error) => {
                    this.setState({
                        error
                    });
                }
            );
    }

    fetchAPIComment = (id) => {
        fetch(`http://localhost:3001/api/comment/product/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        tongSoBinhLuan: result[0].SoLuong
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
        this.fetchAPIComment(this.props.match.params.bookid);
    }

    componentWillReceiveProps(newprops) {
        this.fetchAPI(newprops.match.params.bookid);
        this.fetchAPIComment(newprops.match.params.bookid);
    }

    XuLyThemGioHang = () => {
        if (this.state.items.SoLuongTon - this.refs.txtSoLuongNhap.value < 0) {
            alert('Sách không đủ số lượng đặt hàng');
        }
        else {
            if (localStorage.getItem('carts')) {
                let flag = false;
                let carts = JSON.parse(localStorage.getItem('carts'));

                for (let i = 0; i < carts['danhsach'].length; i++) {
                    if (carts['danhsach'][i].MaSanPham === this.state.items.MaSanPham) {
                        flag = true;
                        carts['danhsach'][i].SoLuong = parseInt(this.refs.txtSoLuongNhap.value);
                        break;
                    }
                }
                if (flag === false) {
                    carts['danhsach'].push({
                        "MaSanPham": this.state.items.MaSanPham,
                        "SoLuong": this.refs.txtSoLuongNhap.value,
                        "GiaSanPham": this.state.items.GiaSanPham
                    });
                }
                localStorage.setItem('carts', JSON.stringify(carts));
            }
            else {
                let carts = JSON.stringify({
                    "danhsach": [{
                        "MaSanPham": this.state.items.MaSanPham,
                        "SoLuong": this.refs.txtSoLuongNhap.value,
                        "GiaSanPham": this.state.items.GiaSanPham
                    }]
                });
                localStorage.setItem('carts', carts);
            }
            this.setState({ isCartSuccess: true })
            let that = this;
            setTimeout(function(){that.setState({isCartSuccess: false})}, 5000);
        }
    }

    render() {
        let styleCmt = {
            width: 500,
            height: 80
        };
        let styleName = {
            width: 500
        };

        let successCart = this.state.isCartSuccess ? (<div class="alert alert-success">
            <strong>Thành công!</strong> Đã thêm sách vào giỏ hàng.
      </div>) : null;

        return (
            <React.Fragment>
                <div className="clearfix" id="productDetail">
                    <div className="w40p thumbnail pull-left">
                        <img src={`http://localhost:3001/images/Product/${this.state.items.HinhURL}`} alt={`${this.state.items.TenSanPham}`} />
                    </div>
                    <div className="w60p pull-right">
                        <ul>
                            <li className="list-group-item"><h2>{this.state.items.TenSanPham}</h2></li>
                            <li className="list-group-item"><b>Tác giả: </b>{this.state.items.TenTacGia}</li>
                            <li className="list-group-item"><b>Nhà xuất bản: </b>{this.state.items.TenHangSanXuat}</li>
                            <li className="list-group-item"><b>Thể loại: </b>{this.state.items.TenLoaiSanPham}</li>
                            <li className="list-group-item"><b>Giới thiệu: </b>{this.state.items.MoTa}</li>
                            <li className="list-group-item"><b>Số lượng còn:</b>{this.state.items.SoLuongTon} quyển</li>
                            <li className="list-group-item"><h4>Giá: <span className="price">{this.state.items.GiaSanPham} VNĐ</span></h4></li>
                            <li className="list-group-item">
                                Số lượng: <input type="text" defaultValue="1" className="list-group-item" name="txtSoLuongNhap" id="txtSoLuongNhap" ref="txtSoLuongNhap" />
                            </li>
                            <li className="list-group-item">
                                <button type="Submit" onClick={this.XuLyThemGioHang} className="btn btn-danger" >Đặt vào giỏ hàng</button>

                            </li>
                            {successCart}
                        </ul>
                    </div>
                </div>
                <BookDetailBottom MaSanPham={this.state.items.MaSanPham} MaLoaiSanPham={this.state.items.MaLoaiSanPham} />

                <div class="form-group">
                    <label for="comment">Comment:</label>
                    <textarea class="form-control" rows="5" id="comment" style={styleCmt} placeholder="Bạn nghĩ gì về sách này?"></textarea>

                    <label for="usr">Name:</label>
                    <input type="text" class="form-control" id="usr" style={styleName} placeholder="Nhập tên của bạn" />
                </div>
                <button type="button" class="btn btn-primary">Bình Luận</button>

                <hr />
                <h4>Bình luận của bạn đọc <span class="label label-default">{this.state.tongSoBinhLuan}</span></h4>
            </React.Fragment>
        );
    }
}

export default BookDetail;