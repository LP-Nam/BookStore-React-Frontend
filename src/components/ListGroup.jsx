import React, { Component } from "react";
import ListGroupItem from "./ListGroupItem.jsx";
import "../mystyle.css";

class ListGroup extends Component {

	constructor(props) {
		super(props);

		this.render = this.render.bind(this);

		this.state = {
			groupItems: [{}],
		}
	}

	componentDidMount() {
		fetch("http://localhost:3001/api/product/publisher")
			//fetch("https://bookstore-express-backend.herokuapp.com/api/product/new")
			.then(res => res.json())
			.then(
				(result) => {
					console.log(result);
					this.setState({
						groupItems: result
					});
				},

				(error) => {
					this.setState({
						error
					});
				}
			);
	}

	render() {
		const groups = this.state.groupItems.map((value, index) => {
			const ten = value.TenHangSanXuat;
			const id = value.MaHangSanXuat;

			return (
				<ListGroupItem id={id} tenTacGia={ten} url='/publisher'/>
			);
		});
		return (
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