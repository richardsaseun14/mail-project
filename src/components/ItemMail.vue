<script>
import Checkbox from "./Checkbox.vue";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
    },
    checked: {
      type: Boolean,
    },
    isRead: {
      type: Boolean,
    },
  },

  components: {
    Checkbox,
  },

  methods: {
    changeHandler(e) {
      this.$emit("check", { id: this.id, value: e });
    },
  },
};
</script>

<template>
  <div
    class="mail-item"
    :class="{ 'mail-item--isRead': isRead }"
    @click.self="$emit('clickHandler', id)"
  >
    <Checkbox :value="checked" @changed="changeHandler"></Checkbox>
    <span @click="$emit('clickHandler', id)" class="mail-item__title">{{
      title
    }}</span>
  </div>
</template>

<style>
.mail-item {
  cursor: pointer;
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

.mail-item--isRead {
  opacity: 0.5;
}
</style>
