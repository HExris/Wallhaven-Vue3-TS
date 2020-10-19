<template>
  <div id="main">
    <router-view></router-view>
    <Rocket />
  </div>
</template>

<script lang="ts">
import Header from "@/components/Dumb/Header/index.vue";
import Rocket from "@/components/Rocket.vue";

const Layout = {
  name: "Layout",
  component: { Header },
};

export default Layout;
</script>

<style lang="less" scoped>
@import url("./index");
</style>