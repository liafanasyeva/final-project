import React from 'react';
import Image from './Image';
import PokemonName from './PokemonName';
import DataCaught from './DataCaught';

const Details = (props) => {
    return (
        <div className="card bg-light mb-3  mx-auto shadow" >
            <Image src={props.src} class="infoImg mx-auto"/>
            <div className="card-body">
            <PokemonName id={props.id} name={props.name}/>
                {(props.date !== '') ? 
                    <DataCaught date={props.date}/>
                        :
                    <p className="card-text  text-danger">You can catch: <span className="text-capitalize">{props.name}</span></p>
                }       
            </div>
        </div>
    )
}

export default Details;