import React, { Component } from 'react';

class ListPublisher extends Component {
    render() {
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
                        <tr>
                            <td>1asdfasdfasdf</td>
                            <td>2asdfasdfasdf</td>
                            <td>
                                <a>
                                    <span className="glyphicon glyphicon-pencil"></span>
                                </a>
                            </td>
                            <td>
                                <a>
                                    <span className="glyphicon glyphicon-ok"></span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListPublisher;