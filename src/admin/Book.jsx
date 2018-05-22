import  React, { Component } from 'react';

class Book extends Component {
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
                <td>{this.props.tensach}</td>
                <td>{this.props.tentacgia}</td>
                <td>{this.props.tenloaisanpham}</td>
                <td>{this.tennxb}</td>
                <td>{this.props.gia}</td>
                <td>{this.props.soluong}</td>
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

export default Book;