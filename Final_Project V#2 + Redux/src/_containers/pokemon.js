import PokeCard from '../_components/pages/PokemonPage';
import { connect } from 'react-redux';
import { getPoke } from '../_actions/pokemon';

const mapStateToProps = (state) => ({
    isLoading: state.pokemonReducer.isLoading,
    error: state.pokemonReducer.error,
    pokemon: state.pokemonReducer.pokemon,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getPokemon: (poke) => dispatch(getPoke(poke))
    };
};

const PokemonContainer = connect(mapStateToProps, mapDispatchToProps)(PokeCard);
export default PokemonContainer;