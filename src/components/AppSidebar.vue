<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="menu">
    <ul class="menu__row">
      <li class="menu__list"><RouterLink to="/inbox">Inbox</RouterLink></li>
      <li class="menu__list"><RouterLink to="/archive">Archive</RouterLink></li>
    </ul>
    <ul class="menu__row">
      <li class="menu__list menu__list--last">Log out</li>
    </ul>

    <!-- <button class="button button--variant-link">Log out</button> -->
  </nav>
</template>

<style>
.menu {
  height: 100%;
  padding: 30px 50px;
  background-color: #221f1f;
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu__row {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu__list {
  background-color: white;
  padding: 8px 16px;
  margin-bottom: 20px;
  text-decoration: none;
}

.menu__list--last {
  margin-bottom: 0;
}
</style>
