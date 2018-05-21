import React from "react";
import ListCards from "./ListCards";

class BookByPublisher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{}]
    }
  }

  fetchAPI = (id) => {
    fetch(`http://localhost:3001/api/product/publisher/${id}`)
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

  componentDidMount() {
    this.fetchAPI(this.props.match.params.id);
  }

  componentWillReceiveProps(newprops) {
    this.fetchAPI(newprops.match.params.id);
  }

  render() {
    return (
      <ListCards items={this.state.items} nameHeader='Sách Theo Nhà Xuất Bản' />
    )
  }
}

export default BookByPublisher;