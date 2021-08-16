import React from "react";
import "./App.css";
import HomePage from "./Pages/Home";
import Navbar from "./Components/navbar/index.js";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import Events from './pages/events';
// import AnnualReport from './pages/annual';
// import Teams from './pages/team';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuPage from "./Pages/MenuPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/menu">
            <MenuPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
