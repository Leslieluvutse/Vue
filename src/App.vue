<script setup>
import { RouterLink,RouterView  } from "vue-router";
</script>

<template>
  <!-- Navigation -->
<nav>
  <div class="top-nav">
    <ul>
      <li><RouterLink to="/" class="link">Home</RouterLink></li>
      <li><RouterLink to="/about" class="link">About</RouterLink></li>
      <li><RouterLink to="/" class="link">Services</RouterLink></li>
      <li><RouterLink to="/" class="link">Blog</RouterLink></li>
      <li><RouterLink to="/" class="link">Contacts</RouterLink></li>
      <li><RouterLink to="/" class="link">Login</RouterLink></li>
      <li><RouterLink to="/signup" class="link">Signup</RouterLink></li>
    </ul>
  </div>
</nav>
   <!--Main Section  -->
   <RouterView/>

   <!-- Footer -->
</template>

<style scoped>

</style>
