import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      isLoggedIn: false,
      displayLogin: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("button pressed");

    const body = {
      email: this.state.email,
      password: this.state.password,
    };

    const data = JSON.stringify(body);
    this.props.checkAuth(data);
  }

  handleRegister(event) {
    event.preventDefault();
    console.log("button pressed");

    const body = {
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
    };

    const data = JSON.stringify(body);
    this.props.addUser(data);
    // //API Call to back-end
    // console.log("Submitted Registration");
    // //let result = fetch data response from backend
    // let result = true;
    // if (result) {
    //   this.setState({
    //     ...this.state,
    //     isLoggedIn: true,
    //   });
    // } else {
    //   this.setState({
    //     ...this.state,
    //     isLoggedIn: false,
    //   });
    // }
  }

  handleToggle(event) {
    const target = event.target;
    const name = target.name;

    if (name === "login") {
      this.setState({
        ...this.state,
        displayLogin: true,
      });
    } else {
      this.setState({
        ...this.state,
        displayLogin: false,
      });
    }
  }

  render() {
    let signInForm = (
      <div className="signin-container field-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
          </Form.Group>
          {/* <Button as={Link} to="/menu" variant="dark" type="submit" onClick={this.handleSubmit}>
            Login
          </Button> */}
          <Button onClick={this.handleSubmit} variant="dark">
            Login
          </Button>
        </Form>
      </div>
    );

    let registerForm = (
      <div className="registration-container field-container">
        <Form>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="first name"
              placeholder="Enter first name"
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="last name"
              placeholder="Enter last name"
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
          </Form.Group>
          {/* <Button as={Link} to="/menu" variant="dark" type="submit" onClick={this.handleRegister}>
            Register
          </Button> */}
          <Button onClick={this.handleRegister} variant="dark" >
            Register
          </Button>
        </Form>
      </div>
    );

    return (
      <div className="login-container">
        <ButtonGroup
          className="login-button-group"
          aria-label="Login Register toggle"
        >
          <Button variant="dark" name="login" onClick={this.handleToggle}>
            Login
          </Button>
          <Button variant="dark" name="register" onClick={this.handleToggle}>
            Register
          </Button>
        </ButtonGroup>
        {this.state.displayLogin ? signInForm : registerForm}
      </div>
    );
  }
}

export default LoginPage;
