interface HomeState {
  homeMenu: MenuItem[];
  tagList: Tag[];
}

interface MenuItem {
  name: string;
  title: string;
  icon: string;
  color: string;
}

interface Tag {
  tagName: string;
}

export default {
  state: {
    homeMenu: [
      {
        name: "Latest",
        title: "Latest",
        icon: "far fa-clock",
        color: "#aadd33"
      },
      {
        name: "Toplist",
        title: "Toplist",
        icon: "far fa-gem",
        color: "#b760f0"
      },
      {
        name: "Random",
        title: "Random",
        icon: "fa fa-random",
        color: "#ee7733"
      },
      {
        name: "Upload",
        title: "Upload",
        icon: "fa fa-upload",
        color: "#dd5555"
      },
      {
        name: "Forums",
        title: "Forums",
        icon: "far fa-comments ",
        color: "#ffbb33"
      }
    ],
    tagList: [
      {
        tagName: "Studio Ghibli"
      },
      {
        tagName: "League of Legends"
      },
      {
        tagName: "fantasy girl"
      },
      {
        tagName: "4K"
      },
      {
        tagName: "nature"
      },
      {
        tagName: "landscape"
      },
      {
        tagName: "anime girls"
      },
      {
        tagName: "Asian"
      },
      {
        tagName: "anime"
      },
      {
        tagName: "abstract"
      },
      {
        tagName: "digital art"
      },
      {
        tagName: "minimalism"
      },
      {
        tagName: "cyberpunk"
      },
      {
        tagName: "mountains"
      },
      {
        tagName: "fractal"
      },
      {
        tagName: "goosebumps"
      },
      {
        tagName: "cosplay"
      },
      {
        tagName: "technology"
      },
      {
        tagName: "artwork"
      },
      {
        tagName: "sand"
      },
      {
        tagName: "science fiction"
      },
      {
        tagName: "pattern"
      }
    ]
  },
  getters: {
    getMenu(state: HomeState) {
      return state.homeMenu;
    },
    getTags(state: HomeState) {
      return state.tagList;
    }
  },
  mutations: {},
  actions: {}
};
