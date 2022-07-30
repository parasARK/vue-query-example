import { useQuery } from 'vue-query'
import PokeAPI from 'pokeapi-typescript'

function usePokemonList() {
  return useQuery('pokemons', () => PokeAPI.Pokemon.listAll())
}

export default usePokemonList
