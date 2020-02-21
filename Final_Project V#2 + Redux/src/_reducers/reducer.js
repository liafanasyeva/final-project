import { combineReducers } from 'redux';
import pokemonsListReducer from './pokemonsList';
import collectionReducer from './collection';
import pokemonReducer from './pokemon';

const reducer = combineReducers({
    pokemonsListReducer,
    collectionReducer,
    pokemonReducer
});

export default reducer;