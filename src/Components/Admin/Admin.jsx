import React  , {Component} from "react";


export default class Admin extends Component {

    constructor(){
        super();
        this.state = {
            name:'Ramsmujh'
        }
    }

    render(){
        return(
            <>
                <h1>Welcome To Home Page {this.state.name}</h1>
            </>
        )
    }
}