import React, {Component} from "react";
import ListGroupItem from"./ListGroupItem";
class ListType extends React.Component{
    render()
    {
        const types = this.props.typeItems.map((value, index) => {
			const ten = value.TenLoaiSanPham;
			const id = value.MaLoaiSanPham;

			return (
				<ListGroupItem id={id} tenTacGia={ten}/>
			);
		});
        return(
            <div className="panel panel-default" id="cateMdl">
                <div className="panel-heading">CÁC THỂ LOẠI</div>
                <ul className="list-group">
                    <li>
                        {types}
                    </li>
                </ul>
            </div>
        )
    }
}
export default ListType;