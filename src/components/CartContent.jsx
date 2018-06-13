import React from "react";
import Card from "./Card";

class CartContent extends React.Component {
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

    componentDidMount() {
        this.fetchAPI(this.props.MaSanPham);
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        //this.fetchAPI(this.newProps.MaSanPham);
    }

    test = () => {

    }

    render() {
        const ten = this.state.items.TenSanPham;
        const url = this.state.items.HinhURL;
        const ma = this.state.items.MaSanPham;
        const tacGia = this.state.items.TenTacGia;
        const gia = this.state.items.GiaSanPham;

        return (
            <div>
                <tr>
                    <td width="20%">
                        <input type="hidden" name="MaSanPham" value={this.state.items.MaSanPham} />
                        <Card key={"key_" + ma} tenSach={ten} tenTacGia={tacGia} giaBan={gia} maSach={ma} hinhAnh={"http://localhost:3001/images/Product/" + url} />
                    </td>
                    <td><input type="text" class="form-control wA" name="txtSoLuong" id="txtSoLuong" ref="txtSoLuong" value={this.props.SoLuong} onChange={this.test} /></td>
                    <td><button type="button" name="action" value="CapNhat" class="btn btn-success"> Cập nhật</button></td>
                    <td><button type="button" name="action" value="Huy" class="btn btn-info" onClick={this.props.handleClickHuy}>Hủy</button></td>
                </tr>
            </div >
        )
    }
}

export default CartContent;