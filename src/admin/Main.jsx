import React from "react";
import TopBar from "./TopBar";
import Navigation from "./Navigation";
import MainRouterAdmin from "./MainRouterAdmin";
import { Redirect } from "react-router-dom";

class Main extends React.Component {
    render() {
        if (localStorage.getItem('token') != '' && localStorage.getItem('token')) {
            return (
                <div>
                    <TopBar />
                    <Navigation />
                    <div className="container">
                        <div className="w100p" id="page">
                            <div>
                                <MainRouterAdmin />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <Redirect to='/' />
        )
    }
}
export default Main;