interface NavState {
    homeMenu: MenuItem[];
}

interface MenuItem {
    name: string;
    title: string;
    icon: string;
    color: string;
}

export default {
    state: {
        homeMenu: [
            {
                name: "Latest",
                title: "Latest",
                icon: "far fa-clock",
                color: '#aadd33'
            },
            {
                name: "Toplist",
                title: "Toplist",
                icon: "far fa-gem",
                color: '#b760f0'
            },
            {
                name: "Random",
                title: "Random",
                icon: "fa fa-random",
                color: '#ee7733'
            },
            {
                name: "Upload",
                title: "Upload",
                icon: "fa fa-upload",
                color: '#dd5555'
            },
            {
                name: "Forums",
                title: "Forums",
                icon: "far fa-comments ",
                color: '#ffbb33'
            }
        ]
    },
    getters: {
        getMenu(state: NavState) {
            return state.homeMenu
        }
    },
    mutations: {},
    actions: {}
}
