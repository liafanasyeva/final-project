import { getAllPokemons, allLength } from '../_routes/routes';

export const actionTypes = {
    DATA_IS_LOADING: 'DATA_IS_LOADING',
    DATA_HAS_ERROR: 'DATA_HAS_ERROR',
    DATA_LOADING_SUCCESS: 'DATA_LOADING_SUCCESS',
    ADD_PAGE: 'ADD_PAGE',
    SET_LENGTH: 'SET_LENGTH'
}

export const dataHasError = (bool, msg) => {
    return {
        type: actionTypes.DATA_HAS_ERROR,
        error: bool,
        msg: msg
    };
}

export const dataIsLoading = (bool) => {
    return {
        type: actionTypes.DATA_IS_LOADING,
        isLoading: bool
    };
}

export const addPage = (num = 1) => {
    return {
        type: actionTypes.ADD_PAGE,
        page: num 
    };
}

export const dataLoadingSuccess = (pokemons) => {
    return {
        type: actionTypes.DATA_LOADING_SUCCESS,
        pokemons
    };
}

export const setLength = (size) => {
    return {
        type: actionTypes.SET_LENGTH,
        size
    };
}

export const getLength = () => {
    return (dispatch) => {

        allLength()
            .then(size => {
                dispatch(setLength(size))
            })
            .catch((err) => {
                console.log(err.message);
                dispatch(dataHasError(true, err.message));
            });
    }
}

export const getAll = (page, limit) => {
    return (dispatch) => {
        dispatch(dataIsLoading(true));

        getAllPokemons(page, limit)
            .then(pokemons => {
                dispatch(dataLoadingSuccess(pokemons));
                dispatch(addPage(page+1));
            })
            .then(() => dispatch(dataIsLoading(false)))
            .catch((err) => {
                console.log(err.message);
                dispatch(dataHasError(true, err.message));
                dispatch(dataIsLoading(false));
            });
    };
}