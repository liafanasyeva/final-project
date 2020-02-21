import React from "react";

export default function CollectionItem({ item, value }) {
  const { id, name, count, caughtDate } = item;
  const { removeItem } = value;
  return (
    <div className="row my-1 text-center">
      <div className="col-10 mx-auto col-lg-2">#{id}</div>

      <div className="col-10 mx-auto col-lg-2">
        <img
          src={`/pokemons/${id}.png`}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="pokemon"
        />
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Pokemon:</span>
        {name}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Data of catching:</span>
        {caughtDate}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div className="btn btn-black mx-1" onClick={() => removeItem(id)}>
          X
        </div>
      </div>
    </div>
  );
}
