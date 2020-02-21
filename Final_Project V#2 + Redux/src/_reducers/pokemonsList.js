import { actionTypes } from '../_actions/pokemonsList';
const initState = {
    isLoading: false,
    error: false,
    pokemons: [],
    page: 1,
    size: 1,
    hasMore: true
}

const pokemonsListReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.DATA_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case actionTypes.DATA_HAS_ERROR:
            return {
                error: action.error,
                msg: action.msg,
            }
        case actionTypes.ADD_PAGE:
           return {
                ...state,
                page: action.page
            }
        case actionTypes.SET_LENGTH: 
            return {
                ...state,
                size: action.size
            }
        case actionTypes.DATA_LOADING_SUCCESS:
            if(state.pokemons.length !== 0) {
                return {
                    ...state, 
                    pokemons: [...state.pokemons, ...action.pokemons],
                    hasMore: ((state.pokemons.length + action.pokemons.length) !== state.size) ? 
                        true : false
                }
            } else {
                return {
                    ...state, 
                    pokemons: [...action.pokemons]
                }
            }
            
        default:
            return state;
    }
}

export default pokemonsListReducer;