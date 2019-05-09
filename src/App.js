import React, { Component } from "react";
import "./App.css";
import NavBarComponent from "./components/nav-bar/nav-bar";
import HomeComponent from "./components/home/home";
import About from "./components/about/about";
import CategoryComponent from "./components/category/category";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewHome from "./components/new-home-component/new-home-component";
import { Jumbotron, Container, Row, Col, Form, Badge } from "react-bootstrap";
import MapContainer from "./components/MapContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginSuccess: false,
      name: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();

    const username = event.target.elements.username.value;

    this.setState({
      loginSuccess: true,
      name: username
    });

    console.log("login requested.");
  }
  render() {
    const loginSuccess = this.state.loginSuccess;
    const username = this.state.name;

    return (
      <div className="App">
        <Router>
          <div>
            <NavBarComponent />

            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={About} />
            <Route path="/new" component={NewHome} />
            <Route
              path="/category/:categoryName"
              component={CategoryComponent}
            />
          </div>
        </Router>
        <Container>
          <Row>
            <Col className="result" xs={6} md={4}>
              Results go here
            </Col>
            <Col className="map" xs={12} md={8}>
              <MapContainer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
