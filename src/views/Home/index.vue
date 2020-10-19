<template>
  <div id="home">
    <NavMenu />
    <Search />
    <Tags />
  </div>
</template>

<script lang="ts">
import NavMenu from "@/components/Dumb/NavMenu/index.vue";
import Search from "@/components/Smart/Search/index.vue";
import Tags from "@/components/Smart/Tags/index.vue";

const Home = {
  name: "Home",
  components: { NavMenu, Search, Tags },
};
export default Home;
</script>

<style lang="less" scoped>
@import url("./index");
</style>