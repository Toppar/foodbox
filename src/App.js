import React from "react";
import "./App.css";
import HomePage from "./Pages/Home";
import Navbar from "./Components/navbar/index.js";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuPage from "./Pages/MenuPage";
import LoginPage from "./Pages/LoginPage";
import CartPage from "./Pages/CartPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      selectedItemLength: 0,
    };
    this.handleMenuSelection = this.handleMenuSelection.bind(this);
  }

  handleMenuSelection(selection) {
    console.log(selection);

    this.setState({
      ...this.state,
      selectedItems: selection,
      selectedItemLength: selection.length,
    });
  }

  render() {
    const rows = [
      { id: 1, dish: "Kung Pao Chicken", cuisine: "Chinese", price: 13 },
      { id: 2, dish: "Spaghetti Di Mare", cuisine: "Italian", price: 15 },
      { id: 3, dish: "Tandoori Chicken", cuisine: "India", price: 14 },
      { id: 4, dish: "Tempura", cuisine: "Japanese", price: 9 },
      { id: 5, dish: "Mahshi", cuisine: "Syrian", price: 12 },
      { id: 6, dish: "Pad Kra Prao", cuisine: "Thai", price: 12 },
      { id: 7, dish: "Cassoulet", cuisine: "French", price: 14 },
      { id: 8, dish: "Tamales", cuisine: "Mexican", price: 9 },
      { id: 9, dish: "Currywurst", cuisine: "German", price: 15 },
      { id: 10, dish: "Chicons au gratin", cuisine: "Belgium", price: 12 },
    ];

    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/menu">
              <MenuPage
                handleSelection={this.handleMenuSelection}
                rows={rows}
              />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/cart">
              <CartPage rows={rows} selectedItems={this.state.selectedItems} />
            </Route>
          </Switch>
        </Router>
        {/* <HomePage /> */}
      </div>
    );
  }
}

export default App;
