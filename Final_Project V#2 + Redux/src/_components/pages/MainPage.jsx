import React, { Component } from 'react';
import PokemonsAll from '../content/PokemonsAll';
import ButtonLoadMore from '../buttons/ButtonLoadMore';
import Title from '../content/Titlle'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: 50,
        }
    }

    componentDidMount(){   
        this.props.getLength();
        this.getAll();
    }

    onCatch(poke, e) {
        console.log(poke);
        //e.preventDefault();
        e.target.setAttribute('disabled', 'true');
        e.target.classList.remove('btn-primary');
        e.target.classList.add('btn-secondary');
        e.target.textContent = 'You caught me!';
        this.props.catchPokemon(poke);
        poke.caught.push(true);

    }

    getAll() {
        if (!this.props.hasMore) return;
        this.props.getAll(this.props.page, this.state.load);
    }

    render() {
        return(
            <div className="col-md-12">
                <Title title="Pokemons" />
                    <div className="d-flex justify-content-around align-items-center flex-wrap">
                        {this.props.pokemons.map((pokemon, i) => (
                            <PokemonsAll 
                                link={`/pokemon-card/${pokemon.id}`}
                                src={(`../../pokemons/${(pokemon.id <= 720) ? pokemon.id : pokemon.id%100+1}.png`)}
                                pokemon={pokemon}
                                click={this.onCatch.bind(this, pokemon)}
                                key={i}
                            />
                        ))}
                    </div>
                    <div className="col-md-4 mx-auto mb-3">
                        {(!this.props.hasMore) ? 
                            <p className="text-center font-weight-bold">The end:)</p>
                        : 
                            <ButtonLoadMore
                                click={this.getAll.bind(this)} 
                                isLoading={this.props.isLoading}
                                error={this.props.error}/>
                        }
                        
                    </div>
            </div>
        )
    }
}

export default Main;