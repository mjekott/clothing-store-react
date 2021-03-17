import "./App.css";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";

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
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentuser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentuser: userAuth });
      }
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
