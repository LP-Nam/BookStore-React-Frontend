import React from "react";
import TopBar from "./TopBar";
import Navigation from "./Navigation";
import MainRouter from "./MainRouter";
class Main extends React.Component{
    render(){
        return(
            <div>
                <TopBar />
                <Navigation />
                <div className="container">
                    <div className="w100p" id="page"> 
                        <MainRouter />
                    </div> 
                </div>
            </div>
        )
    }
}
export default Main;