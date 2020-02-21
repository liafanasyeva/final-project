import React, { Component } from "react";
import Title from "../Title";
import CollectionColumns from "./CollectionColumns";
import EmptyCollection from "./EmptyCollection";
import { PokemonConsumer } from "../../context";
import CollectionList from "./CollectionList";
import CollectionTotal from "./CollectionTotal";

export default class Collection extends Component {
  render() {
    return (
      <section>
        <PokemonConsumer>
          {value => {
            const { collection } = value;
            if (collection.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title="collection" />
                  <CollectionColumns />
                  <CollectionList value={value} />
                  <CollectionTotal value={value}></CollectionTotal>
                </React.Fragment>
              );
            } else {
              return <EmptyCollection />;
            }
          }}
        </PokemonConsumer>
      </section>
    );
  }
}
