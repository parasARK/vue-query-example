import { useQuery } from 'vue-query'
import axios from 'axios'

const fetchPokemonList = () => axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')

function usePokemonList() {
  return useQuery('todos', fetchPokemonList)
}

export default usePokemonList
