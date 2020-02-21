import React from "react";
import CollectionItem from "./CollectionItem";
export default function CollectionList({ value }) {
  const { collection } = value;
  return (
    <div className="container-fluid">
      {collection.map(item => {
        return <CollectionItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}
