import "./App.css";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";

const Home = (props) => {
  console.log(props);
  return <div>Home</div>;
};

function App() {
  return (
    <div>
      <Route component={HomePage} path="/" exact />
    </div>
  );
}

export default App;
