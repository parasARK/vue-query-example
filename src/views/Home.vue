<script setup lang="ts">
import { computed, ref } from 'vue'
import usePokemonList from '@/composables/usePokemonList'

const searchText = ref<string | null>(null)
const { data, isLoading } = usePokemonList()

const filteredPokemon = computed(() => {
  const search = searchText.value
  if (!search) return data.value?.results

  return data.value?.results.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  )
})
</script>

<template>
  <section class="py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-4">Pokemons List</h1>

      <p v-if="isLoading" class="text-2xl text-slate-600 mb-3">Loading...</p>

      <form class="mb-4">
        <input
          type="search"
          v-model="searchText"
          class="px-2 py-1 border-2 border-slate-400 rounded outline-none"
          placeholder="Search Pokemon"
        />
      </form>
      <div v-if="data" class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        <div
          v-for="pokemon in filteredPokemon"
          :key="pokemon.name"
          class="p-3 border-2 border-slate-100 rounded"
        >
          <router-link
            :to="{ name: 'pokemon-details', params: { name: pokemon.name } }"
            class="text-lg text-blue-600 hover:text-blue-700"
            >{{ pokemon.name }}</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
