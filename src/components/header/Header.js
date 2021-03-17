import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../asset/crown.svg";
import { auth } from "../../firebase/firebase";
import "./Header.scss";

const Header = ({ currentuser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentuser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;