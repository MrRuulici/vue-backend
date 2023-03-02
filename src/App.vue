<template>
  <nav>
    <RouterLink to="/">About</RouterLink>
    <RouterLink to="/blog">Blog</RouterLink>
    <RouterLink to="/GetAQuote">GetAQuote</RouterLink>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/media">Media</RouterLink>
    <RouterLink to="/shop">Shop</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue router';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
