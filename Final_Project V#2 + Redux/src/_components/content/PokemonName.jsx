import React from 'react';

const PokemonName = (props) => {
    return (
        <p className="card-text text-capitalize">#{props.id} {props.name}</p>
    )
}

export default PokemonName;