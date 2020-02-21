import React from 'react';
import ButtonDisabled from '../buttons/ButtonDisabled';
import ButtonCatch from '../buttons/ButtonCatch';
import ImageLink from './ImageLink';
import PokemonName from './PokemonName';


const PokemonsAll = (props) => {
    return (
        <div className="card bg-light mb-3 shadow-sm" >
            <ImageLink link={props.link} src={props.src}/>
            <div className="card-body">
                <PokemonName id={props.pokemon.id} name={props.pokemon.name}/>
                {(props.pokemon.caught.length > 0) ? 
                    <ButtonDisabled />
                :
                    <ButtonCatch onClick={props.click} />
                }
            </div>
        </div>
    )
}

export default PokemonsAll;