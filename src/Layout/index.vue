<template>
  <div id="main">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

const Layout = defineComponent({
  name: 'Layout',
  component: { Header },
});

export default Layout;
</script>

<style lang="less" scoped>
#main {
  width: 100vw;
  height: 100vh;
  background: url('~@/assets/images/main_background.jpg') fixed;
  background-size: cover;
  overflow: auto;
}
</style>