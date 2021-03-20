import React from "react";
import BaseButton from "../custom-button/BaseButton";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <BaseButton>Go To Checkout</BaseButton>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
