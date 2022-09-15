import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      mails: [
        {
          title: "Your 7-figure plan goes byebye at midnight",
          message: "message",
          id: 1,
          checked: false,
          location: "inbox",
          isRead: false,
        },
        {
          title: "Get this now before",
          message: "message 2",
          id: 2,
          checked: false,
          location: "inbox",
          isRead: false,
        },
        {
          title: "Wow, your prescription is finished",
          message: "message 3",
          id: 3,
          checked: false,
          location: "inbox",
          isRead: true,
        },
        {
          title: "Wow, your prescription is ready",
          message: "message 3",
          id: 4,
          checked: false,
          location: "archive",
          isRead: true,
        },
      ],
    };
  },
  mutations: {
    toggleCheck(state, { id }) {
      const idx = state.mails.findIndex((el) => el.id === id);
      state.mails[idx].checked = !state.mails[idx].checked;
    },
    toggleAll(state, { value, variant }) {
      state.mails = state.mails.map((el) => {
        if (el.location === variant) {
          return { ...el, checked: value };
        } else {
          return { ...el };
        }
      });
    },
    // toggleAll(state, value) {
    //   state.mails.map((el) => (el.checked = value));
    // },
  },
  getters: {
    getMails: (state) => (variant) => {
      return state.mails.filter((el) => el.location === variant);
    },
  },
});

export default store;
