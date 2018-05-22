import React, { Component } from 'react';

class ListBookType extends Component {
    constructor(props){
        super(props);
        this.state={
            itemsListBookType: [{}]
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3001/api/admin/ListBookType`)
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          this.setState({
            itemsListBookType: result
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
        var icon = new String("glyphicon glyphicon-")
        if(this.props.bixoa == 1)
        {
            icon = icon+"ok";
        }
        else
            icon = icon +"remove"
        const items = this.state.itemsListBookType.map((value, index) => {
			return (
                 <tr>
                    <td>{value.MaLoaiSanPham}</td>
                    <td>{value.TenLoaiSanPham}</td>
                    <td>
                        <a>
                            <span className="glyphicon glyphicon-pencil"></span>
                        </a>
                    </td>
                    <td>
                        <a>
                            <span className={icon}></span>
                        </a>
                    </td>
             </tr>
			);
		});
        return (
            <div>
                <form  className="navbar-form pull-right" id="searchBox">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Tên loại sách"  ></input>
                    </div>
                    <button type="submit" className="btn"><span className="glyphicon glyphicon-search"></span></button>
                </form>
                <table className="table table-striped" id="orderList">
                <thead>
                    <tr className="nb active">
                        <td>Mã Loại</td>
                        <td colSpan="3">Tên Loại</td>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
                </table>
            </div>
        );
    }
}

export default ListBookType;