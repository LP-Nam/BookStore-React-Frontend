import React from "react";
import SignIn from "./SignIn";
import InfoAccount from "./InfoAccount";
class TopBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogged: false
        }
    }

    setLogged=()=>{
        this.setState({isLogged: true});
    }

    signOut=()=>{
        this.setState({isLogged: false});
    }

    render() {
        if (localStorage.getItem('token') || this.state.isLogged) {
            //let token = localStorage.getItem('token');
            return <InfoAccount signOut={this.signOut}/>
        }
        return (
            <SignIn setLogged={this.setLogged}/>
        )
    }
}
export default TopBar;