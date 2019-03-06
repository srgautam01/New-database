import React, {Component} from 'react';
import './login.css';
import {Link} from 'react-router-dom';
class Login extends Component{
    render() {
        return (
            <div className={"login"}>
                <form className="form-inline my-2 my-lg-0">

                    <input className="form-control mr-sm-2" type="text" placeholder="Username" aria-label="Username" />
                    <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Login</button>

                </form>
            </div>
        )
    }
}

export default Login;