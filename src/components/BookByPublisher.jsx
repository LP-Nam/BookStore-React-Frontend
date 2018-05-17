import React from "react";
import ListCards from "./ListCards";

class BookByPublisher extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: [{}]
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/api/product/publisher/${this.props.match.params.id}`)
		//fetch("https://bookstore-express-backend.herokuapp.com/api/product/new")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          this.setState({
            items: result
          });
        },

        (error) => {
          this.setState({
            error
          });
        }
      );
    }

    componentWillReceiveProps(newprops){
        fetch(`http://localhost:3001/api/product/publisher/${newprops.match.params.id}`)
		//fetch("https://bookstore-express-backend.herokuapp.com/api/product/new")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          this.setState({
            items: result
          });
        },

        (error) => {
          this.setState({
            error
          });
        }
      );
    }

    render(){
        return(
            <ListCards items={this.state.items} nameHeader='Sách Theo Nhà Xuất Bản'/>
        )
    }
}

export default BookByPublisher;