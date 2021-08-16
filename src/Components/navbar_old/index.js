import React from "react";
import "./index.css";
import foodboxlogo from "../../foodboxlogo.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(event) {
    const target = event.target
    const name = target.name

    console.log('Hi Toppar!')
    console.log('You clicked button: ' + name)
  }

  render() {
    let buttonInfo = [
      { className: "login-button", text: "Login" },
      { className: "registration-button", text: "Registration" },
      { className: "menu-button", text: "Menu" },
    ];

    let buttonGroup = buttonInfo.map((x) => (
      <button name={x.className} onClick={this.handleClick} className={`${x.className} nav-button`}>{x.text}</button>
    ));

    return (
      <div className="nav-bar">
        <img src={foodboxlogo} className="foodbox-logo"></img>
        <div className="button-container">
          {buttonGroup}
          {/* <button className="login-button nav-button">Login</button>
          <button className="registration-button nav-button">
            Registration
          </button>
          <button className="menu-button nav-button">Menu</button>
          <button className="search-button nav-button">Search</button>
          <button className="about-button nav-button">About</button>
          <button className="contact-button nav-button">Contact</button> */}
        </div>
      </div>
    );
  }
}

export default NavBar;
