<script setup lang="ts">
import { useRoute } from 'vue-router'
import usePokemon from '@/composables/usePokemon'

const route = useRoute()
const id = route.params.id

const { data, isLoading } = usePokemon(id)
</script>

<template>
  <section class="py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-4">Pokemons details</h1>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <p v-if="isLoading">loading...</p>
      <code v-if="data">
        <pre>{{ JSON.stringify(data, null, 2) }}</pre>
      </code>
    </div>
  </section>
</template>
