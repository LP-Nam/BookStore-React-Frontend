import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SignIn from "./SignIn";
import InfoAccount from "./InfoAccount";
import { Redirect } from 'react-router-dom';
class TopBar extends React.Component {

    render() {
        if (localStorage.getItem('token')) {
            let token = localStorage.getItem('token');
            return <InfoAccount />
        }
        return (
            <SignIn />
        )
    }
}
export default TopBar;