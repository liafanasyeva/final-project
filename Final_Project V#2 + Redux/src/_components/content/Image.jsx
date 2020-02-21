import React from 'react';

const Image = (props) => {
    return(
        <img className={"  "+props.class} src={props.src} alt="pokemon" />
    )
}

export default Image;