import { catchPokemon } from '../_routes/routes';
import {catchPoke} from '../_constants/catch';


export const catchedPokemon = (poke) => {
    return (dispatch) => {
        dispatch(catchPoke(true));
        catchPokemon(poke);
        dispatch(catchPoke(false));       
    }
}