import React, { Component } from 'react';

class Account extends Component {
    render() {
        var icon = new String("glyphicon glyphicon-")
        if(this.props.bixoa == 1)
        {
            icon = icon+"ok";
        }
        else
            icon = icon +"remove"
        return (
            <tr>
                <td>{this.props.mataikhoan}</td>
                <td>{this.props.tendangnhap}</td>
                <td>{this.props.tenloaitaikhoan}</td>
                <td>{this.props.tenhienthi}</td>
                <td>{this.props.dienthoai}</td>
                <td>{this.props.diachi}</td>
                <td>{this.props.email}</td>
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
    }
}

export default Account;