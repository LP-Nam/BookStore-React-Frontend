import React from "react";
import ListCards from "./ListCards";

class BookByCategory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            itemsByCategory: [{}]
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/api/product/category/${this.props.match.params.id}`)
		//fetch("https://bookstore-express-backend.herokuapp.com/api/product/new")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          this.setState({
            itemsByCategory: result
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
        fetch(`http://localhost:3001/api/product/category/${newprops.match.params.id}`)
		//fetch("https://bookstore-express-backend.herokuapp.com/api/product/new")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          this.setState({
            itemsByCategory: result
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
            <ListCards items={this.state.itemsByCategory} nameHeader='Sách Theo Thể Loại'/>
        )
    }
}

export default BookByCategory;