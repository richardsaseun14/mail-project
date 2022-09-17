<script>
import { RouterView } from "vue-router";
import AppSideNavigation from "./components/AppSideNavigation.vue";

export default {
  components: {
    AppSideNavigation,
    RouterView,
  },
};
</script>

<template>
  <AppSideNavigation></AppSideNavigation>
  <RouterView />
</template>

<style scoped></style>
