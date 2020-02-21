import React from "react";

export default function CollectionColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">ID</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Image</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Name of pokemon</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Data of catching</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Remove</p>
        </div>
      </div>
    </div>
  );
}
