import "./App.css";
import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
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
    console.log(this.props.currentUser);
    return (
      <div>
        <Header />
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={Shop} path="/shop" />
          <Route
            exact
            path="/signin"
            render={() => {
              return this.props.currentUser ? <Redirect to="/" /> : <Sign />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
