export const DELETE_POKEMON = 'DELETE_POKEMON';

export const deletePoke = (bool) => {
    return {
        type: DELETE_POKEMON,
        isDeleted: bool
    }
}