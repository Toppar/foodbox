import React from "react";
import "./App.css";
import HomePage from "./Pages/Home";
import Navbar from "./Components/navbar/index.js";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuPage from "./Pages/MenuPage";
import LoginPage from "./Pages/LoginPage";
import CartPage from "./Pages/CartPage";
import PaymentPage from "./Pages/PaymentPage";
import SubmitOrderPage from "./Pages/SubmitOrderPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      selectedItemLength: 0,
      totalPrice: null,
      shippingAddress: ""
    };
    this.handleMenuSelection = this.handleMenuSelection.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.getShippingAddress = this.getShippingAddress.bind(this);
  }

  handleMenuSelection(selection) {
    this.setState({
      ...this.state,
      selectedItems: selection,
      selectedItemLength: selection.length,
    });
  }

  removeItem(item) {
    let tempArr = this.state.selectedItems;
    for (let i = 0; i < this.state.selectedItems.length; i++) {
      if (item == this.state.selectedItems[i]) {
        tempArr.splice(i, 1);
      }
    }
    this.setState({
      ...this.state,
      selectedItems: tempArr,
    });
  }

  getTotalPrice(price) {
    this.setState({
      ...this.state,
      totalPrice: price.toFixed(2),
    });
  }

  getShippingAddress(address){
    this.setState({
      ...this.state,
      shippingAddress: address
    })
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
              <CartPage
                rows={rows}
                selectedItems={this.state.selectedItems}
                removeItem={this.removeItem}
                getTotalPrice={this.getTotalPrice}
              />
            </Route>
            <Route path="/payment">
              <PaymentPage getShippingAddress={this.getShippingAddress} />
            </Route>
            <Route path="/submit-order">
              <SubmitOrderPage
                rows={rows}
                selectedItems={this.state.selectedItems}
                totalPrice={this.state.totalPrice}
                shippingAddress={this.state.shippingAddress}
              />
            </Route>
          </Switch>
        </Router>
        {/* <HomePage /> */}
      </div>
    );
  }
}

export default App;
