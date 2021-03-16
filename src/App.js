import "./App.css";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop.js";
import Header from "./components/header/Header.js";

const Home = (props) => {
  console.log(props);
  return <div>Home</div>;
};

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={Shop} path="/shop" exact />
      </Switch>
    </div>
  );
}

export default App;
