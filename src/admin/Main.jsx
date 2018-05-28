import React from "react";
import TopBar from "./TopBar";
import Navigation from "./Navigation";
<<<<<<< HEAD
import MainRouter from "./MainRouter";
=======
import Content from "./Content";
import MainRouterAdmin from "./MainRouterAdmin"
>>>>>>> 47ea15a5f325c3d15d2453887323a4b16900fb6e
class Main extends React.Component{
    render(){
        return(
            <div>
                <TopBar />
                <Navigation />
                <div className="container">
                    <div className="w100p" id="page"> 
<<<<<<< HEAD
                        <MainRouter />
=======
                        <div> 
                            <MainRouterAdmin />
                        </div> 
>>>>>>> 47ea15a5f325c3d15d2453887323a4b16900fb6e
                    </div> 
                </div>
            </div>
        )
    }
}
export default Main;