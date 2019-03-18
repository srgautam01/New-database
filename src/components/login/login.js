import React, {Component} from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import { API_LOGIN } from '../../constants'

class Login extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()

        alert('you clickd login!')
    }

    render() {
        return (
            <div className={"login"}>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>

                    <input className="form-control mr-sm-2" type="text" placeholder="Username" aria-label="Username" />
                    <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Login</button>

                </form>
            </div>
        )
    }
}

export default Login;