<template>
  <div id="main">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";

const Layout = {
  name: "Layout",
  component: { Header },
};

export default Layout;
</script>

<style lang="less" scoped>
@import url('./index');
</style>