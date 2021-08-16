import React from "react";
import "./index.css";
import foodboxlogo from "../../foodboxlogo.png";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navRefLinks: [
        { className: "login-button", text: "Login", link: "/login" },
        { className: "menu-button", text: "Menu", link: "/menu" },
      ],
    };
  }

  render() {
    let navLinksGroup = this.state.navRefLinks.map((x) => (
      <Nav.Item>
        <Nav.Link as={Link} to={x.link} className={x.className}>{x.text}</Nav.Link>
      </Nav.Item>
    ));

    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand clasname="navbar-brand">Foodbox</Navbar.Brand>
        <Nav className="me-auto">{navLinksGroup}</Nav>
      </Navbar>
    );
  }
}

export default NavBar;
