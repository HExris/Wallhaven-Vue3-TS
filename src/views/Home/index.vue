<template>
  <div id="home">
    <NavMenu />
  </div>
</template>

<script lang="ts">
import NavMenu from "@/components/Dumb/NavMenu/index.vue";

const Home = {
  name: "Home",
  components: { NavMenu },
};
export default Home;
</script>

<style lang="less" scoped>
@import url("./index");
</style>