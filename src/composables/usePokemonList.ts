import { useQuery } from 'vue-query'
import PokeAPI from 'pokeapi-typescript'

function usePokemonList() {
  return useQuery('pokemons', () => PokeAPI.Pokemon.list(354, 0))
}

export default usePokemonList
