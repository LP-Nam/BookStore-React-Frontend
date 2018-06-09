import React, { Component } from 'react';
import { BrowserRouter, Route, Link,Redirect } from 'react-router-dom';
class addPublisher extends Component {
    constructor(props){
        super(props)
        this.state ={
            items: [{}]
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        fetch(`http://localhost:3001/api/admin/addPublisher/`, {
            method: 'POSt',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                TenHangSanXuat: this.refs.TenNXB.value,
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
    handleInput = (e)=>{
        const temp= this.state.items.slice()
        temp[0].TenHangSanXuat = e.target.value
        this.setState({
            items: temp
        })
    }
    render() {
        if(this.state.redirect)
        {
            return <Redirect to = '/admin/ListPublisher' />
        }
        return (
            <div class="panel">
                <h2 class="page-header text-center">Thêm NXB</h2>
                <div class="panel-body">
                    <form onSubmit={this.handleSubmit} class="frmEdit w40p center-block">
                        Tên NXB: 
                            <input onChange={this.handleInput} type="text" class="form-control" autofocus ="true" ref="TenNXB"></input>
                            <br></br>
                            <button type="submit" class="btn btn-primary center-block">Lưu</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default addPublisher;