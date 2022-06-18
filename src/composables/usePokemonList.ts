import axios from 'axios'
import { useQuery } from 'vue-query'

export interface PokemonListApiResponse {
  count: number
  next: string
  previous: null
  results: Result[]
}

export interface Result {
  name: string
  url: string
}

const fetchPokemonList = () =>
  axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((d) => d.data) as Promise<PokemonListApiResponse>

function usePokemonList() {
  return useQuery('pokemons', fetchPokemonList)
}

export default usePokemonList
