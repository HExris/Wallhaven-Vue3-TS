<template>
  <div id="main">
    <router-view></router-view>
    <Rocket />
  </div>
</template>

<script lang="ts">
// import Header from "@/components/Dumb/Header/index.vue";
import Rocket from "@/components/Dumb/Rocket/index.tsx";
// import Gallery from "@/components/Dumb/Gallery/index.tsx";

const Layout = {
  name: "Layout",
  components: {
    Rocket,
  },
  mounted() {
    // console.log(Rocket)
  },
};

export default Layout;
</script>

<style lang="less" scoped>
@import url("./index");
</style>