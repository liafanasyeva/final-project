import React, { Component } from "react";
import { PokemonConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { DateCaught } from "./DateCaught";

export default class Details extends Component {
  render() {
    return (
      <PokemonConsumer>
        {value => {
          const { id, name, caught, caughtDate } = value.details;
          return (
            <div className="details-wrapper container py-5">
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h1>
                    {name} #{id}
                  </h1>
                </div>
                <div className="image-wrapper col-10 mx-auto text-center">
                  <img src={`../pokemons/${id}.png`} alt="pokemon"></img>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <DateCaught>
                    Status:<br></br>
                    {caught
                      ? `Caught 
                    ${caughtDate}`
                      : "Not caught"}
                  </DateCaught>
                  <p className="text-muted lead"></p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back to main page</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={caught ? true : false}
                      onClick={() => {
                        value.addToCollection(id);
                        value.openModal(id);
                      }}
                    >
                      {caught ? "Caught" : "Add to colllection"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </PokemonConsumer>
    );
  }
}
