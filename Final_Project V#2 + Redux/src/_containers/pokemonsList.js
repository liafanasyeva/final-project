import Main from '../_components/pages/MainPage';
import { connect } from 'react-redux';
import { getAll, getLength } from '../_actions/pokemonsList';
import { catchedPokemon } from '../_actions/catch';
import { deletedPokemon } from '../_actions/delete';

const mapStateToProps = (state) => ({
    isLoading: state.pokemonsListReducer.isLoading,
    error: state.pokemonsListReducer.error,
    pokemons: state.pokemonsListReducer.pokemons,
    page: state.pokemonsListReducer.page,
    hasMore: state.pokemonsListReducer.hasMore
});

const mapDispatchToProps = (dispatch) => {
    return {
        getLength: () => dispatch(getLength()),
        catchPokemon: (poke) => dispatch(catchedPokemon(poke)),
        deletePokemon: (poke) => dispatch(deletedPokemon(poke)),
        getAll: (page, limit) => dispatch(getAll(page, limit))
    };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;