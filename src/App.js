import "./App.css";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";

import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop.js";
import Header from "./components/header/Header.js";
import Sign from "./pages/sign/Sign.js";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";

class App extends React.Component {
  unsubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={Shop} path="/shop" />
          <Route component={Sign} path="/signin" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
