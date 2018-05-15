import React from "react"
export default class OrderBill extends React.Component{
    render()
    {
        return(
            <tr>
                <td>a</td>
                <td>b</td>
                <td>c</td>
                <td>d</td>
                <td>easdfasfasfd</td>
                <td><a href="index.php?a=7&id=<?php echo $row['MaDonDatHang']; ?>"><span class="glyphicon glyphicon-pencil"></span></a></td>
                <td><a onclick="OpenOrderDetail(<?php echo $row['MaDonDatHang']; ?>);"><span class="glyphicon glyphicon-th-list"></span></a></td>
            </tr>
            
        )
    }
}