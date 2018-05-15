import React, {Component} from "react";

class ListGroupItem extends Component {

	render() {
		return(
			<li>
				<a className="list-group-item" href="#">{this.props.tenTacGia}</a>
			</li>
		);
	}

}

export default ListGroupItem;