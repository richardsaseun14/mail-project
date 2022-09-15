import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      mails: [
        {
          title: "title",
          message: "message",
          id: 1,
          checked: false,
          location: "inbox",
        },
        {
          title: "title2",
          message: "message 2",
          id: 2,
          checked: false,
          location: "inbox",
        },
        {
          title: "title3",
          message: "message 3",
          id: 3,
          checked: false,
          location: "inbox",
        },
      ],
      selected: [],
    };
  },
  mutations: {
    toggleCheck(state, { id, value }) {
      console.log("🚀 ~ toggleCheck ~ value", value);
      console.log("🚀 ~ toggleCheck ~ id", id);
      const idx = state.mails.findIndex((el) => el.id === id);
      if (value) {
        state.selected = [idx, ...state.selected];
      } else {
        const tmp = state.sele;
        state;
      }
      // state.mails[idx].checked = !state.mails[idx].checked;
      // state.selected = [];
    },
  },
  actions: {
    // toggleCheck(context, id) {
    //   context.commit();
    // },
  },
});

export default store;
