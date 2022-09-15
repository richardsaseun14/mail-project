<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    changeHandler(e) {
      this.$emit("changed", e.target.checked);
    },
  },
};
</script>

<template>
  <label class="checkbox">
    <input
      type="checkbox"
      id="vehicle1"
      name="vehicle1"
      :checked="value"
      @change="changeHandler"
    />
  </label>
</template>

<style>
.checkbox {
  font-size: 30px;
  /* line-height: 1.1; */
  margin: 0 16px;
  /* display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em; */
}
</style>
