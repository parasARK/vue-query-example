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
        <div v-for="pokemon in data.results" :key="pokemon.name">
          <p>{{ pokemon.name }}</p>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
