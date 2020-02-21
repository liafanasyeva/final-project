import React from 'react';
import ButtonDelete from '../buttons/ButtonDelete';
import ImageLink from './ImageLink';
import PokemonName from './PokemonName';
import DataCaught from './DataCaught';

const PokemonsCollection = (props) => {
    return(
        <div className="card bg-light mb-3 shadow-sm" id={props.pokemon.id}>
            <ImageLink link={props.link} src={props.src}/>
            <div className="card-body">
                <PokemonName id={props.pokemon.pokemonId} name={props.pokemon.name}/>
                <DataCaught date={props.pokemon.date}/>
                <ButtonDelete onClick={props.click}/>

            </div>
        </div>
    )
}

export default PokemonsCollection;