import React, { Component } from 'react';

class ListPublisher extends Component {
    constructor(props){
        super(props);
        this.state={
            itemsListPublisher: [{}]
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3001/api/admin/ListPublisher`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          this.setState({
            itemsListPublisher: result
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
        const items = this.state.itemsListPublisher.map((value, index) => {
			return (
                 <tr>
                    <td>{value.MaHangSanXuat}</td>
                    <td>{value.TenHangSanXuat}</td>
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
                            <td>Mã NXB</td>
                            <td colSpan="3">Tên NXB</td>
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

export default ListPublisher;