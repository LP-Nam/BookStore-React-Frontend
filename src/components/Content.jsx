import React, {Component} from "react";
import AccountRegister from "./AccountRegister";
import NewBooks from "./NewBooks";
import MostPopularBooks from "./MostPopularBooks";
import {Route} from 'react-router-dom'
class Content extends React.Component{

	constructor(props) {
		super(props);

		this.render = this.render.bind(this);
	}

    render()
    {
        return(
            <div>  
                <NewBooks items={this.props.newItems}/>
                <MostPopularBooks items={this.props.mostPopularItems}/>
            </div>
        )
    }
}
export default Content;