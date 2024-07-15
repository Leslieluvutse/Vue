<script setup>
import { useCounterStore } from '@/stores/counter';

const store =useCounterStore()
</script>

<template>
  <main>
    <h1>Welcome Home!</h1>
    <v-btn @click="store.increment">Increment</v-btn>
    {{ store.count }}
    <v-btn @click="store.decrement">Decrement</v-btn>
  </main>
</template>
