import React from "react";
import CollectionItem from "../collection-item/Collectionitem";
import "./PreviewCollection.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemsProps }) => {
            return <CollectionItem key={id} {...otherItemsProps} />;
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;
