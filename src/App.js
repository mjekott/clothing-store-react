import "./App.css";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase";

import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop.js";
import Header from "./components/header/Header.js";
import Sign from "./pages/sign/Sign.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentuser: null,
    };
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentuser: user });
      console.log(this.state.currentuser);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentuser={this.state.currentuser} />
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={Shop} path="/shop" />
          <Route component={Sign} path="/signin" />
        </Switch>
      </div>
    );
  }
}

export default App;
