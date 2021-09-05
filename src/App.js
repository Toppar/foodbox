import React from "react";
import "./App.css";
import Navbar from "./Components/navbar/index.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MenuPage from "./Pages/MenuPage";
import LoginPage from "./Pages/LoginPage";
import CartPage from "./Pages/CartPage";
import PaymentPage from "./Pages/PaymentPage";
import SubmitOrderPage from "./Pages/SubmitOrderPage";
import AdminLoginPage from "./Pages/AdminLoginPage";
import AdminPortalPage from "./Pages/AdminPortalPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      selectedItemLength: 0,
      totalPrice: null,
      shippingAddress: "",
      menu: [],
      isAuthenticated: false,
    };

    this.handleMenuSelection = this.handleMenuSelection.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.getShippingAddress = this.getShippingAddress.bind(this);
    this.getMenu = this.getMenu.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
    this.addUser = this.addUser.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.checkAdmin = this.checkAdmin.bind(this);
    this.changeDish = this.changeDish.bind(this);
  }

  getMenu = async () => {
    const response = await fetch("http://localhost:8080/get_menu", {
      method: "GET",
    });
    const responseJSON = await response.json();
    console.log(responseJSON);
    this.setState({
      ...this.state,
      menu: responseJSON,
    });
    console.log(this.state.menu);
  };

  async checkAuth(myData) {
    const response = await fetch("http://localhost:8080/check_password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
      },
      body: myData,
    });
    const responseValue = await response.json();
    console.log(responseValue);
    if (responseValue) {
      this.setState({
        ...this.state,
        isAuthenticated: responseValue,
      });
    }

    if (this.state.isAuthenticated) {
      window.location.href = "/menu";
    }
  }

  async addUser(myData) {
    const response = await fetch("http://localhost:8080/add_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
      },
      body: myData,
    });
    const responseValue = await response.json();
    console.log(responseValue);
    if (responseValue) {
      window.location.href = "/login";
    }
  }

  async checkAdmin(myData) {
    const response = await fetch("http://localhost:8080/check_admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
      },
      body: myData,
    });
    const responseValue = await response.json();
    console.log(responseValue);
    if (responseValue) {
      this.setState({
        ...this.state,
        isAuthenticated: responseValue,
      });
    }

    if (this.state.isAuthenticated) {
      window.location.href = "/adminportal";
    }
  }

  async changePrice(myData) {
    const response = await fetch("http://localhost:8080/change_price", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
      },
      body: myData,
    });
    const responseValue = await response.json();
    console.log(responseValue);
    if (responseValue) {
      window.location.href = "/menu";
    }
  }

async changeDish(myData) {
  const response = await fetch("http://localhost:8080/change_dish", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
    },
    body: myData,
  });
  const responseValue = await response.json();
  console.log(responseValue);
  if (responseValue) {
    window.location.href = "/menu";
  }
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

  getShippingAddress(address) {
    this.setState({
      ...this.state,
      shippingAddress: address,
    });
  }

  componentDidMount() {
    this.getMenu();
  }

  render() {
    
    // const rows = [
    //   { id: 1, dish: "Kung Pao Chicken", cuisine: "Chinese", price: 13 },
    //   // { id: 2, dish: "Spaghetti Di Mare", cuisine: "Italian", price: 15 },
    //   // { id: 3, dish: "Tandoori Chicken", cuisine: "India", price: 14 },
    //   // { id: 4, dish: "Tempura", cuisine: "Japanese", price: 9 },
    //   // { id: 5, dish: "Mahshi", cuisine: "Syrian", price: 12 },
    //   // { id: 6, dish: "Pad Kra Prao", cuisine: "Thai", price: 12 },
    //   // { id: 7, dish: "Cassoulet", cuisine: "French", price: 14 },
    //   // { id: 8, dish: "Tamales", cuisine: "Mexican", price: 9 },
    //   // { id: 9, dish: "Currywurst", cuisine: "German", price: 15 },
    //   // { id: 10, dish: "Chicons au gratin", cuisine: "Belgium", price: 12 },
    // ];

    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <LoginPage checkAuth={this.checkAuth} addUser={this.addUser} />
            </Route>
            <Route path="/menu">
              <MenuPage
                handleSelection={this.handleMenuSelection}
                rows={this.state.menu}
              />
            </Route>
            <Route path="/login">
              <LoginPage checkAuth={this.checkAuth} addUser={this.addUser} />
            </Route>
            <Route path="/cart">
              <CartPage
                rows={this.state.menu}
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
                rows={this.state.menu}
                selectedItems={this.state.selectedItems}
                totalPrice={this.state.totalPrice}
                shippingAddress={this.state.shippingAddress}
              />
            </Route>
            <Route path="/adminlogin">
              <AdminLoginPage checkAdmin={this.checkAdmin} rows={this.state.menu} />
            </Route>
            <Route path="/adminportal">
              <AdminPortalPage changePrice={this.changePrice} changeDish={this.changeDish} rows={this.state.menu} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
