<script>
import { mapMutations } from "vuex";
export default {
  props: {
    title: {
      type: String,
    },
    message: {
      type: String,
    },
    id: {
      type: Number,
    },
    isShow: { type: Boolean },
  },

  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
    archive() {
      this.sendArchive(this.id);
      this.closeModal();
    },
    ...mapMutations(["markRead", "sendArchive"]),
  },
};
</script>

<template>
  <div v-if="isShow" class="modal">
    <div class="modal__overlay" @click="closeModal"></div>
    <div class="modal__content">
      <a class="modal__close" @click="closeModal">Close (Esc)</a>
      <div class="modal__content-actions">
        <button class="button button--position-first" @click="markRead(id)">
          Mark as read (r)
        </button>
        <button class="button" @click="archive">Archive (a)</button>
      </div>
      <div class="">
        <h4 class="modal__content-title">{{ title }}</h4>
        <p class="modal__content-message">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.modal {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #33333337;
  display: flex;
}
.modal__close {
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}

.modal__overlay {
  height: 100%;
  width: -webkit-fill-available;
}
.modal__content-actions {
  margin: 10px 0 24px 0;
}
.modal__content {
  padding: 16px;
  height: 100%;
  width: 800px;
  background-color: white;
}
.modal__content-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
}
.modal__content-message {
}
</style>
