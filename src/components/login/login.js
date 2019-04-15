import React, {Component} from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import { API_LOGIN } from '../../constants'
import {withRouter} from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()

        // TODO get proper credentials
        const username = this.state.username;
        const password = this.state.password;;

        fetch('http://localhost:4002/login',  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json())
            .then(res => {
                if (res.success) {
                    this.props.history.push("/tools");
                }else {
                    alert("Wrong username/password")
                }
                console.log('success', res);
            })

        //
        // fetch('http://localhost:4002/expressions')
            // .then(res => res.json())
            // .then(res => {
            //     console.log('Got all expressions', res)
            // })
            // .catch(err => {
            //     console.error('error: ', err);
            // })

        // alert('you clickd login!')
    }

    handleChange(key, e) {
        this.setState({
            [key]: e.target.value
        })

    }

    render() {
        return (
            <div className={"login"}>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>

                    <input className="form-control mr-sm-2"
                           type="text" placeholder="Username"
                           onChange={(e) => this.handleChange('username', e)}
                           aria-label="Username" />
                    <input className="form-control mr-sm-2" type="password"
                           onChange={(e) => this.handleChange('password', e)}
                           placeholder="Password" aria-label="Password" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Login</button>

                </form>
            </div>
        )
    }
}

export default withRouter(Login);