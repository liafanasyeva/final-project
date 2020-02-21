import axios from 'axios';
const URL = 'http://localhost:9000';

//All pokemons
export const getAllPokemons = (page, limit) => {
    return axios
            .get(`${URL}/pokemons/?_embed=caught&_page=${page}&_limit=${limit}`, { 
                headers: {'Content-Type' : 'application/json'}
            })
            .then(res => {
                return res.data;
            })
            .catch((err) => {
                return err
            });
}

//Caught pokemons 
export const getCaught = (page, limit) => {
    return axios
            .get(`${URL}/caught?_page=${page}&_limit=${limit}&_sort=id&_order=desc`, {
                headers: {'Content-Type' : 'application/json'}
            })
            .then(res => {
                return res.data;
            })
            .catch((err) => {
                return err
            });
}

export const getPokemon = (id) => {
    return axios
            .get(`${URL}/pokemons/${id}?_embed=caught`, {
                headers: {'Content-Type' : 'application/json'}
            })
            .then(res => {
                return res.data;
            });
}

export const deletePokemon = (pokemon) => {
    return axios
            .delete(`${URL}/caught/${pokemon.id}`,{
                headers: {'Content-Type' : 'application/json'}
            })
            .then(res => {
                return res.data;
            });
}


export const catchPokemon = (pokemon) => {
        return axios
            .post(`${URL}/caught`, 
            { 
              name: pokemon.name,
              date: new Date().toLocaleDateString(),
              pokemonId: pokemon.id
            },
            {headers: {'Content-Type' : 'application/json'}})
            .then(res => {
                return res.data;
            });
    
}

export const allLength = () => {
    return axios
        .get(`${URL}/pokemons`, {
            headers: {'Content-Type' : 'application/json'}
        })
        .then(res => {
            return res.data.length;
        });
}

export const caughtLength = () => {
    return axios
        .get(`${URL}/caught`, {
            headers: {'Content-Type' : 'application/json'}
        })
        .then(res => {
            return res.data.length;
        });
}