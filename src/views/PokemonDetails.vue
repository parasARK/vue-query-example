<script lang="ts">
import { useRoute, useRouter } from 'vue-router'
import usePokemon from '@/composables/usePokemon'
import { defineComponent } from 'vue'

export default defineComponent({
  beforeCreate() {
    const route = useRoute()
    const router = useRouter()
    const name = route.params.name

    if (typeof name !== 'string') {
      return router.push({ name: 'not-found' })
    }
  },
  setup() {
    const route = useRoute()
    const name = route.params.name as string

    const { data: pokemon, isLoading } = usePokemon(name)

    return {
      pokemon,
      isLoading,
    }
  },
})
</script>

<template>
  <section class="py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-4">Pokemon details</h1>
      <router-link :to="{ name: 'home' }" class="text-blue-400 underline">Home</router-link>

      <h3 v-if="isLoading">Loading...</h3>
      <div v-if="pokemon">
        <h2>{{ pokemon.name }}</h2>

        <img :src="pokemon.sprites.back_default" :alt="pokemon.name" class="w-48 h-48" />
      </div>
    </div>
  </section>
</template>
