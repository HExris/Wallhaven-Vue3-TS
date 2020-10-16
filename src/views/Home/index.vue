<template>
  <div id="home">
    <div class="homepage_menu">
      <router-link
        to="/"
        class="brand"
      >
        <img src="~@/assets/images/logo.png" />
        <h2 class="slogan"> The best wallpapers on the Net! </h2>
      </router-link>
      <ul>
        <li
          v-for="menu in homePageMenu"
          :key="menu.title"
        >{{menu.title}}</li>
      </ul>
      <h1>asdadsa</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
const Home = {
  name: "Home",
  components: {},
  setup() {
    const store = useStore()
    // const menu = store.getters.getMenu()
    console.log(store.getters.getMenu)
    return store;
  },
}
export default Home;
</script>

<style lang="less" scoped>
@import url("./index");
</style>