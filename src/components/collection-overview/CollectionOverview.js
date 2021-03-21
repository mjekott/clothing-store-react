import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./CollectionOverview.scss";
import PreviewCollection from "../preview-collection/PreviewCollection";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selector";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <PreviewCollection key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
