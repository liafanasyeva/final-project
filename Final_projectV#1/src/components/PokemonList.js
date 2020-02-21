import React, { Component } from "react";
import Pokemon from "./Pokemon";
import Title from "./Title";
import { PokemonConsumer } from "../context";
import { ButtonContainer } from "./Button";

class PokemonList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="pokemons" />
            <div className="row">
              <PokemonConsumer>
                {value => {
                  return value.pokemons.map(pokemon => {
                    return <Pokemon key={pokemon.id} pokemon={pokemon} />;
                  });
                }}
              </PokemonConsumer>
            </div>
            <PokemonConsumer>
              {value => {
                const { loadMorePokemons } = value;
                return (
                  <ButtonContainer
                    className="cart-btn"
                    onClick={() => loadMorePokemons()}
                  >
                    Load more
                  </ButtonContainer>
                );
              }}
            </PokemonConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PokemonList;
