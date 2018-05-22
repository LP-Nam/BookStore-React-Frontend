import React from "react"
export default class OrderBill extends React.Component{
    render()
    {
        return(
            <tr>
                <td>{this.props.madonhang}</td>
                <td>{this.props.makhachhang}</td>
                <td>{this.props.tongtien}</td>
                <td>{this.props.ngaylap}</td>
                <td>{this.props.tentrangthai}</td>
                <td><a ><span className="glyphicon glyphicon-pencil"></span></a></td>
                <td><a ><span className="glyphicon glyphicon-th-list"></span></a></td>
            </tr>
            
        )
    }
}