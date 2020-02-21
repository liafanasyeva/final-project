import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Collection from "./components/Collection";
import Default from "./components/Default";
import Details from "./components/Details";
import PokemonList from "./components/PokemonList";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            component={PokemonList}
            render={this.getPokemons}
          />
          <Route path="/details" component={Details} />
          <Route path="/collection" component={Collection} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
