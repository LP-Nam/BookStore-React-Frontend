import React from"react";
import Card from "./Card.jsx";

class ListCards extends React.Component{

    render()
    {
    	const cards = this.props.items.map((sach, index) => {
			const ten = sach.TenSanPham;
			const url = sach.HinhURL;
			const ma = sach.MaSanPham;
			const tacGia = sach.TenTacGia;
			const gia = sach.GiaSanPham;

			return (
				<Card key={"key_"+ma} tenSach={ten} tenTacGia={tacGia} giaBan={gia} maSach={ma} hinhAnh={"http://localhost:3001/images/Product/"+url}/>
			);
		});
        

        return(
            <div className="clearfix">
                <h2 className="page-header">{this.props.nameHeader}</h2>
                {cards}
            </div>
        );
    }
}
export default ListCards;