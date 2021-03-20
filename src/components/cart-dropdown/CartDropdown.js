import React from "react";
import BaseButton from "../custom-button/BaseButton";
import "./CartDropdown.scss";
import { connect } from "react-redux";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <BaseButton>Go To Checkout</BaseButton>
    </div>
  );
};
/* const mapStateToProps = ({ cart: cartItems }) => ({
  cartItem,
});
 */
export default connect()(CartDropdown);
