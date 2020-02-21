import PokeCollection from '../_components/pages/PokeCollection';
import { connect } from 'react-redux';
import {  getCollectionLength, getAllCaught } from '../_actions/collection';

const mapStateToProps = (state) => ({
    isLoading: state.collectionReducer.isLoading,
    error: state.collectionReducer.error,
    pokemons: state.collectionReducer.pokemons,
    page: state.collectionReducer.page,
    hasMore: state.collectionReducer.hasMore
});

const mapDispatchToProps = (dispatch) => {
    return {
        getLength: () => dispatch(getCollectionLength()),
        getAllCaught: (page, limit) => dispatch(getAllCaught(page, limit))
    };
};
const CollectionContainer = connect(mapStateToProps, mapDispatchToProps)(PokeCollection);
export default CollectionContainer;