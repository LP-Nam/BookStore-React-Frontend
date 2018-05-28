import React, {Component} from "react";
import AccountRegister from "./AccountRegister";
import {Route} from 'react-router-dom'
import ListCards from "./ListCards";
import "../mystyle.css";

class Content extends React.Component{

  constructor(props) {
    super(props);

    this.render = this.render.bind(this);

    this.state = {
      newItems: [{}],
      mostPopularItems: [{}]
    }
  }
    
    componentDidMount() {
		fetch("http://localhost:3001/api/product/new")
		//fetch("https://bookstore-express-backend.herokuapp.com/api/product/new")
      .then(res => res.json())
      .then(
        (result) => {
        	console.log(result);
          this.setState({
            newItems: result
          });
        },

        (error) => {
          this.setState({
            error
          });
        }
      );
			fetch("http://localhost:3001/api/product/best-seller")
			//fetch("https://bookstore-express-backend.herokuapp.com/api/product/best-seller")
      .then(res => res.json())
      .then(
        (result) => {
        	console.log(result);
          this.setState({
            mostPopularItems: result
          });
        },

        (error) => {
          this.setState({
            error
          });
        }
      );
  	}

    render()
    {
        return(
            <div>  
                <ListCards items={this.state.newItems} nameHeader='Sách Mới'/>
                <ListCards items={this.state.mostPopularItems} nameHeader='Sách Được Mua Nhiều'/>
            </div>
        )
    }
}
export default Content;