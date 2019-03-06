import React, { Component } from 'react';
import './nav-bar.css';
import {Link} from 'react-router-dom';
import Login from '../login/login'

class NavBarComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(

            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <Link className="navbar-brand" to="/"></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tools" className="nav-link">Tools</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About us</Link>
                        </li>

                    </ul>


                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <Login />
                </div>
            </nav>
        )
    }
}

export default NavBarComponent;