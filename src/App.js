import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarComponent from './components/nav-bar/nav-bar'
import HomeComponent from './components/home/home'
import ToolComponent from './components/tools/tools'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
    constructor(props){
        super(props)

    this.state = {
        loginSuccess: false,
        name: ""
    }
    this.handleLogin = this.handleLogin.bind(this)
}

    handleLogin(event){
        event.preventDefault();

        const username = event.target.elements.username.value;

        this.setState({
            loginSuccess: true,
            name: username
        })

        console.log('login requested.');
    }
  render() {
        const loginSuccess = this.state.loginSuccess;
        const username = this.state.name;

    return (
      <div className="App">

        <Router>
            <div>
                <NavBarComponent />

                <main className={"main"}>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/tools" component={ToolComponent} />
                </main>
            </div>
        </Router>
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
