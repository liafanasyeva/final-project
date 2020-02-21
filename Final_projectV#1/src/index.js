import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PokemonProvider } from "./context";

ReactDOM.render(
  <PokemonProvider>
    <Router>
      <App />
    </Router>
  </PokemonProvider>,
  document.getElementById("root")
);
