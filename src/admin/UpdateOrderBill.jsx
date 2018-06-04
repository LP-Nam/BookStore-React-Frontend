import React, { Component } from 'react';
import { BrowserRouter, Route, Link,Redirect } from 'react-router-dom';
import main from "./Main";
class UpdateOrderBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [{}],
          status: [{}],
          redirect: false,
          loadSuccess: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleCustomerIDChange = this.handleCustomerIDChange.bind(this)
        this.handleTotalMoneyChange = this.handleTotalMoneyChange.bind(this)
        this.handleStatusChange = this.handleStatusChange.bind(this)
      }
    fetchAPI = (id) => {
        fetch(`http://localhost:3001/api/admin/UpdateOrderBill/${id}`)                                                                                                              
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              this.setState({
                items: result,
                loadSuccess: true
              });
            },
    
            (error) => {
              this.setState({
                error
              });
            }
          );
      }
      getStatus = ()=>{
        fetch(`http://localhost:3001/api/admin/UpdateOrderBill/getStatus`)                                                                                                              
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              status: result,
              loadSuccess: true
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
        this.getStatus();
      }
      handleDateChange=(event)=>{
          const temp = this.state.items.slice();
          temp[0].NgayLap = event.target.value;
          this.setState({
              items: temp
          })
      }
      handleCustomerIDChange=(event)=>{
        const temp = this.state.items.slice();
        temp[0].MaTaiKhoan = event.target.value;
        this.setState({
            items: temp
        })
    }
    handleTotalMoneyChange=(event)=>{
            const temp = this.state.items.slice();
            temp[0].TongThanhTien = event.target.value;
            this.setState({
                items: temp
            })
    }
    handleStatusChange =(event)=>{
        const temp = this.state.items.slice();
        temp[0].MaTinhTrang = event.target.value;
        this.setState({
            items: temp
        })
    }
      handleSubmit=(event)=> {
    
        fetch(`http://localhost:3001/api/admin/UpdateOrderBill/${this.state.items[0].MaDonDatHang}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                NgayLap: this.refs.NgayLap.value,
                MaTaiKhoan: this.refs.MaKhachHang.value,
                TongThanhTien: this.refs.TongThanhTien.value,
                MaTinhTrang: this.refs.TinhTrang.value
            })
            })
            .then(
               (result)=>{
                  this.setState({
                      redirect: true
                  })
                  
               },
               (error)=>{
                    console.log(error);
               }
            )
      }
      pad = (number)=>{
        if (number < 10) {
            return '0' + number;
        }
        return number;
      }
      formatdate = ()=>{
        var date = new Date(this.state.items[0].NgayLap);
        return  date.getFullYear() +
        '-' + this.pad(date.getMonth() + 1) +
        '-' + this.pad(date.getDate()) +
        'T' + this.pad(date.getHours()) +
        ':' + this.pad(date.getMinutes()) +
        ':' + this.pad(date.getSeconds());
      }
    render() {
        const options = this.state.status.map((value, index) => {
            const id = value.MaTinhTrang;
            const tentinhtrang = value.TenTinhTrang;
			return (
                <option  value={id}    key={"key_"+id} >
                    {tentinhtrang}
                </option>
			);
        });
        
        return (
            <div>
                <div className="panel">
                    <h2 className="page-header text-center">Sửa đơn đặt hàng #{this.state.items[0].MaDonDatHang}</h2>
                    <div className="panel-body">

                        <div className="frmEdit w40p center-block">
                            Ngày tạo: 
                            <input  type="datetime-local" onChange={this.handleDateChange} ref="NgayLap" className="form-control" name="NgayLap" value={this.formatdate()}></input>
                            Mã khách hàng: 
                            <input type="text" className="form-control" onChange={this.handleCustomerIDChange} ref="MaKhachHang" value={this.state.loadSuccess?this.state.items[0].MaTaiKhoan:""}></input>
                            Tổng tiền: 
                            <input type="text" className="form-control" onChange={this.handleTotalMoneyChange} ref="TongThanhTien" placeholder="Tổng tiền" name="TongThanhTien" value={this.state.loadSuccess?this.state.items[0].TongThanhTien:""}></input>
                            Trạng thái: 
                            <select className="form-control" ref="TinhTrang" onChange={this.handleStatusChange} value={this.state.loadSuccess?this.state.items[0].MaTinhTrang:""} >
                                <option  value="" className="hidden">-- Chọn trạng thái --</option>  
                                 {options}
                            </select>
                            <br></br>
                            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary center-block">Sửa</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateOrderBill;