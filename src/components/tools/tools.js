import React,  {Component} from "react";
import './tools.css';
import {Link} from 'react-router-dom';


class ToolComponent extends Component{
    render(){
        return(
            <div className={"Tool"}>
                <h1>I am tool page</h1>
                <Link to={'/'}>
I am being pushed back to home.
                </Link>
            </div>
        );
    }
}

export default ToolComponent;