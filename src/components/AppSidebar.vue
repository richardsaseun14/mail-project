<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },

  computed: {
    inboxAmount() {
      return this.$store.getters.getMails("inbox").length;
    },
    archiveAmount() {
      return this.$store.getters.getMails("archive").length;
    },
  },
};
</script>

<template>
  <nav class="menu">
    <ul class="menu__row">
      <li class="menu__list">
        <RouterLink class="menu__list-item" to="/inbox"
          >Inbox({{ inboxAmount }})</RouterLink
        >
      </li>
      <li class="menu__list">
        <RouterLink class="menu__list-item" to="/archive"
          >Archive({{ archiveAmount }})</RouterLink
        >
      </li>
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
  cursor: pointer;
}

.menu__list--last {
  margin-bottom: 0;
}

.menu__list-item {
  width: 100%;
}
</style>
