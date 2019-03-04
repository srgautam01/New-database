import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarComponent from './components/nav-bar'

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
        <NavBarComponent />
        <header className="App-header">
          <img src="https://www2.southeastern.edu/Academics/Faculty/galkadi/imagesNew/galkadiPhoto.jpg" className="App-logo" alt="logo" />

            My Name Is Ghassan Alkadi.<h1>G DOC</h1>
              <form onSubmit={this.handleLogin}>
                  <input type="text" name="username" placeholder="Enter username..."/><br />
                  <input type="password" name="password" placeholder="Enter password..." /><br />

                  <input type="submit" value="Login" />
              </form>

            {loginSuccess  && (
                <p> Congrats, {username}, you are a Ghassan fan now!</p>
            )}
        </header>
      </div>
    );
  }
}

export default App;
