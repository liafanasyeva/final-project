import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light px-sm-5">
      <Link to="/" className="navbar-brand">
        <img src="../../pokemon.png" />
      </Link>
      <div className="d-flex flex-row ">
        <ul className="navbar-nav align-items-center ">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link"  
               onClick={
                ()=>setTimeout ('window.location.reload(false)', )
              }>
              Pokemons 
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/collection" className="nav-link">
              My collection
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
