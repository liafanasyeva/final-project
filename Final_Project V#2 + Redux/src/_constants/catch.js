import { catchPokemon } from '../_routes/routes';

export const CATCH_POKEMON = 'CATCH_POKEMON';

export const catchPoke = (bool) => {
    return {
        type: CATCH_POKEMON,
        isCaught: bool
    }
}
