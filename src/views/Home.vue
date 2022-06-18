<script setup lang="ts">
import usePokemonList from '@/composables/usePokemonList'

const { data, isLoading } = usePokemonList()
</script>

<template>
  <p v-if="isLoading">loading...</p>
  <pre v-if="data">{{ JSON.stringify(data, null, 2) }}</pre>
</template>
