<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import usePokemonList from '@/composables/usePokemonList'
import Loader from '@/components/Loader.vue'

const route = useRoute()
const router = useRouter()
const searchQueryText = route.query.s
const BASE_IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
const searchText = ref(searchQueryText)
const { data, isLoading } = usePokemonList()

const filteredPokemon = computed(() => {
  const search = searchText.value
  router.replace({ name: 'home', query: { s: search } })
  if (!search) return data.value?.results

  return data.value?.results.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toString().toLowerCase())
  )
})
</script>

<template>
  <section class="py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-4">Pokemons List</h1>

      <form class="mb-4">
        <input
          type="search"
          v-model="searchText"
          class="px-2 py-1 border-2 border-slate-400 rounded outline-none"
          placeholder="Search Pokemon"
        />
      </form>

      <section>
        <div v-if="isLoading" class="grid place-items-center h-60">
          <loader size="60px" />
        </div>
        <div v-if="filteredPokemon">
          <div
            v-if="filteredPokemon?.length > 0"
            class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <router-link
              v-for="(pokemon, index) in filteredPokemon"
              :key="pokemon.name"
              :to="{ name: 'pokemon-details', params: { name: pokemon.name } }"
              class="p-3 block border-2 border-slate-100 rounded hover:shadow-md transition-all"
            >
              <div class="w-24 h-24 lg:w-40 lg:h-40 mx-auto">
                <img
                  :src="`${BASE_IMAGE_URL}/${index + 1}.png`"
                  :alt="pokemon.name"
                  loading="lazy"
                  class="w-full h-full"
                />
              </div>
              <p class="text-lg text-blue-600 text-center capitalize">{{ pokemon.name }}</p>
            </router-link>
          </div>
          <div v-else>
            <h4 class="text-3xl font-semibold">No Pokemon found</h4>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
