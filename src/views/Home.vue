<script setup lang="ts">
import usePokemonList from '@/composables/usePokemonList'

const { data, isLoading } = usePokemonList()
</script>

<template>
  <section class="py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-4">Pokemons List</h1>

      <p v-if="isLoading" class="text-2xl text-slate-600">Loading...</p>

      <div v-if="data">
        <div v-for="(pokemon, index) in data.results" :key="pokemon.name">
          <router-link
            :to="{ name: 'pokemon-details', params: { name: pokemon.name } }"
            class="text-blue-600 hover:text-blue-700 underline"
            >{{ pokemon.name }}</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
