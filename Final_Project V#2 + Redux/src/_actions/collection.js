import { getCaught, caughtLength } from '../_routes/routes';

export const actionTypes = {
    COLLECTION_IS_LOADING: 'COLLECTION_IS_LOADING',
    COLLECTION_HAS_ERROR: 'COLLECTION_HAS_ERROR',
    COLLECTION_LOADING_SUCCESS: 'COLLECTION_LOADING_SUCCESS',
    COLLECTION_ADD_PAGE: 'COLLECTION_ADD_PAGE',
    COLLECTION_LENGTH: 'COLLECTION_LENGTH'
}

export const collectionHasError = (bool, msg) => {
    return {
        type: actionTypes.COLLECTION_HAS_ERROR,
        error: bool,
        msg: msg
    };
}

export const collectionIsLoading = (bool) => {
    return {
        type: actionTypes.COLLECTION_IS_LOADING,
        isLoading: bool
    };
}

export const collectionAddPage = (num = 1) => {
    return {
        type: actionTypes.COLLECTION_ADD_PAGE,
        page: num 
    };
}

export const collectionLoadingSuccess = (pokemons) => {
    return {
        type: actionTypes.COLLECTION_LOADING_SUCCESS,
        pokemons
    };
}

export const collectionLength = (size) => {
    return {
        type: actionTypes.COLLECTION_LENGTH,
        size
    };
}

export const getCollectionLength = () => {
    return (dispatch) => {

        caughtLength()
            .then(size => {
                dispatch(collectionLength(size))
            })
            .catch((err) => {
                console.log(err.message);
                dispatch(collectionHasError(true, err.message));
            });
    }
}

export const getAllCaught = (page, limit) => {
    return (dispatch) => {
        dispatch(collectionIsLoading(true));
        
        getCaught(page, limit)
            .then(pokemons => {
                dispatch(collectionLoadingSuccess(pokemons));
                dispatch(collectionAddPage(page+1));
            })
            .then(() => dispatch(collectionIsLoading(false)))
            .catch((err) => {
                console.log(err.message);
                dispatch(collectionHasError(true, err.message));
                dispatch(collectionIsLoading(false));
            });
    };
}