<script>
import Checkbox from "./Checkbox.vue";
import ItemMail from "./ItemMail.vue";
import ModalMail from "./ModalMail.vue";
import { mapMutations } from "vuex";

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
    return { showModal: false, idx: undefined };
  },

  computed: {
    computedTitle() {
      let tmp;
      if (this.variant === "inbox") tmp = "Inbox";
      if (this.variant === "archive") tmp = "Archive";

      return tmp;
    },
    mails() {
      return this.$store.getters.getMails(this.variant);
    },
    // ...mapGetters({
    //   mails: "getMails",
    // }),
  },
  methods: {
    openModal(id) {
      this.idx = id;
      this.showModal = true;
    },
    ...mapMutations(["toggleCheck", "toggleAll"]),
  },
};
</script>

<template>
  <div class="layout">
    <h3 class="layout__title">{{ computedTitle }}</h3>
    <h2 class="layout__subtitle">Emails selected</h2>
    <div class="layout__actions">
      <Checkbox @changed="toggleAll({ value: $event, variant })"></Checkbox>
      <button class="button button--position-first">Mark as read (r)</button>
      <button class="button">Archive (a)</button>
    </div>

    <ItemMail
      v-for="mail in mails"
      :key="mail.id"
      @clickHandler="openModal"
      v-bind="mail"
      @check="({ id, value }) => toggleCheck({ id, value })"
    ></ItemMail>

    <ModalMail
      :isShow="showModal"
      @closeModal="showModal = $event"
      v-bind="mails[mails.findIndex((el) => el.id === idx)]"
    ></ModalMail>
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
