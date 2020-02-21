import React, { Component } from "react";
import database from "./database.json";

const PokemonContext = React.createContext();

class PokemonProvider extends Component {
  state = {
    pokemons: [],
    details: database,
    collection: [],
    modalOpen: false,
    modalWindow: database,
    collectionTotal: 0
  };

  componentDidMount = () => {
    window.onload = () => {
      if (localStorage.getItem("collection") != null) {
        this.setState(function() {
          let localCaught = JSON.parse(localStorage.getItem("collection"));
          return {
            collection: [...localCaught]
          };
        });
      }
    };
    fetch("http://localhost:3001/pokemons/?_limit=16")
      .then(response => response.json())
      .then(json => {
        this.setState(function() {
          json.forEach(function(data) {
            if (localStorage.getItem("collection") != null) {
              let localCaught = JSON.parse(localStorage.getItem("collection"));
              let index = localCaught.findIndex(
                pokemon => pokemon.id === data.id
              );
              if (index !== -1) {
                data.caught = localCaught[index].caught;
                data.caughtDate = localCaught[index].caughtDate;
                data.caughtTime = localCaught[index].caughtTime;
              } else {
                data.caught = false;
                data.caughtDate = "";
                data.count = 0;
              }
            } else {
              data.caughtDate = "";
              data.count = 0;
            }
          });

          return {
            pokemons: [...json]
          };
        });
      });
  };

  loadMorePokemons = e => {
    fetch(
      `http://localhost:3001/pokemons?_start=${
        this.state.pokemons.length
      }&_end=${this.state.pokemons.length + 8}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState(function() {
          json.forEach(function(data) {
            if (localStorage.getItem("collection") != null) {
              let localCaught = JSON.parse(localStorage.getItem("collection"));
              let index = localCaught.findIndex(
                pokemon => pokemon.id === data.id
              );
              if (index !== -1) {
                data.caught = localCaught[index].caught;
                data.caughtDate = localCaught[index].caughtDate;
                data.caughtTime = localCaught[index].caughtTime;
              } else {
                data.caught = false;
                data.caughtDate = "";
                data.caughtTime = "";
                data.count = 0;
              }
            } else {
              data.caughtDate = "";
              data.caughtTime = "";
              data.count = 0;
            }
          });

          return {
            pokemons: [...this.state.pokemons, ...json]
          };
        });
      })
      .catch(error => console.log(error));
  };

  getItem = id => {
    const pokemon = this.state.pokemons.find(item => item.id === id);
    return pokemon;
  };

  handleDetail = id => {
    const pokemon = this.getItem(id);
    this.setState(() => {
      return { details: pokemon };
    });
  };

  addToCollection = id => {
    let tempPokemons = [...this.state.pokemons];
    const index = tempPokemons.indexOf(this.getItem(id));
    const pokemon = tempPokemons[index];
    pokemon.caught = true;
    pokemon.caughtDate = new Date().toLocaleDateString();
    pokemon.count = 1;

    this.setState(
      () => {
        return {
          pokemons: tempPokemons,
          collection: [...this.state.collection, pokemon]
        };
      },
      () => {
        this.addTotal();
        let localCaught = JSON.parse(localStorage.getItem("collection"));
        window.localStorage.setItem(
          "collection",
          JSON.stringify(this.state.collection)
        );
      }
    );
  };

  openModal = id => {
    const pokemon = this.getItem(id);
    this.setState(() => {
      return { modalWindow: pokemon, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  removeItem = id => {
    let tempPokemons = [...this.state.pokemons];
    let tempCollection = [...this.state.collection];

    tempCollection = tempCollection.filter(item => item.id !== id);
    const index = tempPokemons.indexOf(this.getItem(id));
    let removedPokemon = tempPokemons[index];
    removedPokemon.caught = false;
    removedPokemon.count = 0;

    this.setState(
      () => {
        return {
          collection: [...tempCollection],
          pokemons: [...tempPokemons]
        };
      },
      () => {
        this.addTotal();
        window.localStorage.setItem(
          "collection",
          JSON.stringify(this.state.collection)
        );
      }
    );
  };

  clearAll = () => {
    this.setState(
      () => {
        return { collection: [], collectionTotal: 0 };
      },
      () => {
        this.componentDidMount();
        window.localStorage.setItem(
          "collection",
          JSON.stringify(this.state.collection)
        );
      }
    );
  };

  addTotal = () => {
    let subTotal = 0;
    this.state.collection.map(item => (subTotal += item.count));
    this.setState(() => {
      return {
        collectionTotal: subTotal
      };
    });
  };

  render() {
    return (
      <PokemonContext.Provider
        value={{
          ...this.state,
          loadMorePokemons: this.loadMorePokemons,
          handleDetail: this.handleDetail,
          addToCollection: this.addToCollection,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearAll: this.clearAll
        }}
      >
        {this.props.children}
      </PokemonContext.Provider>
    );
  }
}

const PokemonConsumer = PokemonContext.Consumer;
export { PokemonProvider, PokemonConsumer };
