import React, { Component } from 'react';
import Card from "./Card.jsx";
import ListGroup from "./ListGroup.jsx";
import TopBar from "./TopBar"
import Navigation from "./Navigation";
import ListType from "./ListType";
import Footer from "./Footer";
import Content from "./Content";
import MainRouter from "./MainRouter";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Time from "react-input-datetime-local";

class Main extends Component {

	constructor(props) {
		super(props);

		let tmp = [
			{
				"soluong": 0
			},
			{
				"ten": "sach1",
				"id": 65,
				"gia": 120000,
			}
		]

		let item = JSON.stringify(
			tmp
		);

		localStorage.setItem('gioHang', item);

		this.render = this.render.bind(this);
	}

	render() {
		return (
			<div>
				<TopBar />
				<Navigation />

				<div className="container">
					<div className="row" id="page">
						<div className="w25p pull-left">
							<ListGroup />
							<ListType />
						</div>
						<div className="w72p pull-right">
							<MainRouter />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
export default Main;
