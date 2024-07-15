<script setup>
import { RouterLink,RouterView  } from "vue-router";
</script>

<template>
  <!-- Navigation -->
  <v-toolbar
  color="green">

<v-tab to="/home">Home</v-tab>
<v-tab to="/About">About</v-tab>
<v-tab to="/cart">Cart</v-tab>
<v-tab to="">Services</v-tab>
<v-tab to="">Login</v-tab>
<v-tab to="/Signup">Signup</v-tab>
</v-toolbar>
   <!--Main Section  -->
   <RouterView/>
   <RouterLink/>

   <!-- Footer -->
</template>

<style scoped>

</style>
