import React, {Component} from "react";
import ListGroupItem from "./ListGroupItem.jsx";

class ListGroup extends Component {

	render() {
		const groups = this.props.groupItems.map((value, index) => {
			const ten = value.TenHangSanXuat;
			const id = value.MaHangSanXuat;

			return (
				<ListGroupItem id={id} tenTacGia={ten}/>
			);
		});
		return(
			<div className="panel panel-default">
			<div className="panel-heading">NHÀ XUẤT BẢN</div>
				<ul className="list-group">
					{groups}
				</ul>
			</div>
		);
	}

}

export default ListGroup;