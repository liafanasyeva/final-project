import { getPokemon } from '../_routes/routes';

export const actionTypes = {
    POKEMON_IS_LOADING: 'POKEMON_IS_LOADING',
    POKEMON_HAS_ERROR: 'POKEMON_HAS_ERROR',
    POKEMON_LOADING_SUCCESS: 'POKEMON_LOADING_SUCCESS',
}

export const pokemonHasError = (bool, msg) => {
    return {
        type: actionTypes.POKEMON_HAS_ERROR,
        error: bool,
        msg: msg
    };
}

export const pokemonIsLoading = (bool) => {
    return {
        type: actionTypes.POKEMON_IS_LOADING,
        isLoading: bool
    };
}

export const pokemonLoadingSuccess = (pokemon) => {
    return {
        type: actionTypes.POKEMON_LOADING_SUCCESS,
        pokemon
    };
}

export const getPoke = (poke) => {
    return (dispatch) => {
        dispatch(pokemonIsLoading(true));
        
        getPokemon(poke)
            .then(poke => {
                dispatch(pokemonLoadingSuccess(poke));
            })
            .then(() => dispatch(pokemonIsLoading(false)))
            .catch((err) => {
                console.log(err.message);
                dispatch(pokemonHasError(true, err.message));
                dispatch(pokemonIsLoading(false));
            });
    };
}