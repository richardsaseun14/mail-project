<script>
import Checkbox from "./Checkbox.vue";
import ItemMail from "./ItemMail.vue";
import ModalMail from "./ModalMail.vue";
import { mapState, mapMutations } from "vuex";

export default {
  props: {
    variant: {
      type: String,
    },
  },
  components: {
    Checkbox,
    ItemMail,
    ModalMail,
  },
  data() {
    return {};
  },

  computed: {
    computedTitle() {
      let tmp;
      if (this.variant === "inbox") tmp = "Inbox";
      if (this.variant === "archive") tmp = "Archive";

      return tmp;
    },
    ...mapState({
      mails: (state) => state.mails,
    }),
  },
  methods: {
    greet() {
      console.log("here");
    },
    ...mapMutations(["toggleCheck"]),
  },
};
</script>

<template>
  <div class="layout">
    <h3 class="layout__title">{{ computedTitle }}</h3>
    <h2 class="layout__subtitle">Emails selected</h2>
    <div class="layout__actions">
      <Checkbox></Checkbox>
      <button class="button button--position-first">Mark as read (r)</button>
      <button class="button">Archive (a)</button>
    </div>

    <ItemMail
      v-for="mail in mails"
      :key="mail.id"
      @clickHandler="greet"
      v-bind="mail"
      @check="({ id, value }) => toggleCheck({ id, value })"
    ></ItemMail>

    <ModalMail></ModalMail>
  </div>
</template>

<style>
.layout {
  width: 100%;
  padding: 20px 40px;
}
.layout__title {
  font-size: 24px;
  font-weight: 400;
}
.layout__subtitle {
  font-size: 36px;
  font-weight: 700;
}
.layout__actions {
  margin: 20px 0;
}
</style>
