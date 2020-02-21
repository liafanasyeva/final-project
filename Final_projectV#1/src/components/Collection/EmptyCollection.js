import React from "react";
import Title from "../Title";

export default function EmptyCollection() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <Title name="Empty" title="Collection"></Title>
        </div>
      </div>
    </div>
  );
}
