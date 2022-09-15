<script setup>
import Checkbox from "./Checkbox.vue";
</script>

<template>
  <div @click="$emit('clickHandler')" class="mail-item">
    <Checkbox></Checkbox>
    <span class="mail-item__title">fjdnjdsfnksjdnfksjdnfsf</span>
  </div>
</template>

<style>
.mail-item {
  padding: 15px;
  border: 1px solid #969595;
  margin-bottom: 16px;
  border-radius: 4px;
  width: 100%;
  background-color: #f1f1f1;
}

.mail-item__title {
  margin-left: 12px;
}
</style>
