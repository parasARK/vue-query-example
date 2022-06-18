import { useQuery } from 'vue-query'
import axios from 'axios'

type PokemonId = string | string[] | undefined

const fetchPokemon = (pokemonId: PokemonId) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

function usePokemonList(pokemonId: PokemonId) {
  return useQuery(['pokemon', pokemonId], () => fetchPokemon(pokemonId))
}

export default usePokemonList
