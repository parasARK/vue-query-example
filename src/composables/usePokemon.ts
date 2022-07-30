import { useQuery } from 'vue-query'
import PokeAPI from 'pokeapi-typescript'

function usePokemon(pokemonName: string) {
  return useQuery(['pokemon', pokemonName], () => PokeAPI.Pokemon.fetch(pokemonName))
}

export default usePokemon
