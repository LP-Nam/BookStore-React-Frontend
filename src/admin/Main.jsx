import React from "react";
import TopBar from "./TopBar";
import Navigation from "./Navigation";
import Content from "./Content";
class Main extends React.Component{
    render(){
        return(
            <div>
                <TopBar />
                <Navigation />
                <div className="container">
                    <div className="w100p" id="page"> 
                        <div> 
                            <Content />
                        </div> 
                    </div> 
                </div>
            </div>
        )
    }
}
export default Main;