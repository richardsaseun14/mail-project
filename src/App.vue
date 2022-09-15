<script setup>
// import { RouterLink, RouterView } from "vue-router";
import AppSidebar from "./components/AppSideBar.vue";
</script>

<template>
  <AppSidebar></AppSidebar>
  <!-- <header> -->
  <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
  <!-- </header> -->

  <!-- <div class="page"> -->
  <RouterView />
  <!-- </div> -->
</template>

<style scoped></style>
