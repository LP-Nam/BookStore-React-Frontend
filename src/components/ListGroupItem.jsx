import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../mystyle.css";

class ListGroupItem extends Component {

	render() {
		return(
			<li key={this.props.id}>
				{/* <a className="list-group-item" href="#">{this.props.tenTacGia}</a> */}
				<Link to={`${this.props.url}/${this.props.id}`} className="list-group-item">{this.props.tenTacGia}</Link>
			</li>
		);
	}

}

export default ListGroupItem;