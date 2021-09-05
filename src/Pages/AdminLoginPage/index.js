import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

class AdminLoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.checkAdmin(data);
  }

  render() {
    let adminForm = (
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
          <Button onClick={this.handleSubmit} variant="dark">
            Login
          </Button>
        </Form>
      </div>
    );

    return (
      <div className="login-container">
          <h3>Admin Login</h3>
        {adminForm}
      </div>
    );
  }
}

export default AdminLoginPage;
