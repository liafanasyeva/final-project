import { deletePokemon } from '../_routes/routes';
import {deletePoke } from '../_constants/delete'

export const deletedPokemon = (poke) => {
    return (dispatch) => {
        dispatch(deletePoke(true));
        deletePokemon(poke);
        dispatch(deletePoke(false));       
    }
}