import React from "react";
import ListCards from "./ListCards";

class BookByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsByCategory: [{}]
    }
  }

  fetchAPI = (id) => {
    fetch(`http://localhost:3001/api/product/category/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
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

  componentDidMount() {
    this.fetchAPI(this.props.match.params.id);
  }

  componentWillReceiveProps(newprops) {
    this.fetchAPI(newprops.match.params.id);
  }

  render() {
    let TenLoaiSanPham = this.state.itemsByCategory[0] ? this.state.itemsByCategory[0].TenLoaiSanPham : 'Hiện chưa có sách của thể loại này';
    return (
      <ListCards items={this.state.itemsByCategory} nameHeader={TenLoaiSanPham} />
    )
  }
}

export default BookByCategory;