import React from "react";
import "./Collectionitem.scss";
import BaseButton from "../custom-button/BaseButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-action";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <BaseButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </BaseButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
