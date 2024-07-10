<script setup>
import { useCounterStore } from '@/stores/counter';

const store =useCounterStore()
</script>

<template>
  <main>
    <h1>Welcome Home!</h1>
    <v-btn @click="store.count++">Increment</v-btn>
    {{ store.count }}
  </main>
</template>
