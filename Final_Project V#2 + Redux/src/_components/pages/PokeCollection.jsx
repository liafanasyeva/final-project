import React, { Component } from 'react';
import PokemonsCollection from '../content/PokemonsCollection';
import ButtonLoadMore from '../buttons/ButtonLoadMore';
import Title from '../content/Titlle';
import {deletePokemon} from '../../_routes/routes'

class PokeCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: 20,
        }
    }

    componentDidMount(){   
        this.props.getLength();
        this.getAllCaught();
    }

    getAllCaught() {
        if (!this.props.hasMore) return;
        this.props.getAllCaught(this.props.page, this.state.load);
    }

    onDelete(pokemon) {
        let element = document.getElementById(pokemon.id);
        element.parentNode.removeChild(element);
        console.log(pokemon)
        deletePokemon(pokemon);
    }

    render() {
        return(
            <div className="col-sm-12 col-md-12">
                <Title title="My collection" />
                <div className="d-flex justify-content-around align-items-center flex-wrap">
                    {this.props.pokemons.map((pokemon, i) => (
                        <PokemonsCollection 
                            link={`/pokemon-card/${pokemon.pokemonId}`}
                            src={(`../../pokemons/${(pokemon.pokemonId <= 720) ? pokemon.pokemonId : pokemon.pokemonId%100+1}.png`)}
                            pokemon={pokemon}
                            click = {this.onDelete.bind(this, pokemon)}
                            key={i}
                        />
                    ))}
                </div>
                <div className="col-md-4 mx-auto mb-3">


                {(!this.props.hasMore) ? 
                    <p className="text-center font-weight-bold">The end:)</p>
                :
                    <ButtonLoadMore
                        click={this.getAllCaught.bind(this)}
                        isLoading={this.props.isLoading}
                        error={this.props.error}/>
                }
                </div>
            </div>
        )
    }
}

export default PokeCollection;