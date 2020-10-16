import { createStore } from 'vuex'

export default createStore({
  state: {
    homePageMenu: [
      {
        title: "Latest",
        icon: "clock"
      },
      {
        title: "Toplist",
        icon: "gem"
      },
      {
        title: "Random",
        icon: "random"
      },
      {
        title: "Upload",
        icon: "upload"
      },
      {
        title: "Forums",
        icon: "comments"
      }
    ]
  },
  getters: {
    getMenu: state => {
      return state.homePageMenu;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
