import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../asset/crown.svg";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import CartIcon from "../card-icon/CardIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCardHidden } from "../../redux/cart/cart-selectore";
import { selectCurrentUser } from "../../redux/user/user-select";
import "./Header.scss";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign in
          </Link>
        )}

        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapstateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCardHidden,
});

export default connect(mapstateToProps)(Header);
