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
    let TenHangSanXuat = this.state.items[0] ? this.state.items[0].TenHangSanXuat : 'Hiện chưa có sách của NXB này';
    return (
      <ListCards items={this.state.items} nameHeader={TenHangSanXuat} />
    )
  }
}

export default BookByPublisher;