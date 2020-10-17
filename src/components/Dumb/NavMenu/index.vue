<template>
  <div class="homepage_menu">
    <div id="brand">
      <router-link to="/" class="brand">
        <img src="~@/assets/images/logo.png" alt="wallhaven" />
      </router-link>
      <h2 class="slogan">The best wallpapers on the Net!</h2>
    </div>
    <ul>
      <li v-for="menuItem in menuList" :key="menuItem.title">
        <router-link
          :to="{ name: menuItem.name }"
          :class="menuItem.class"
          :style="{ color: `${menuItem.color}` }"
        >
          <i :class="`${menuItem.icon}`"></i>
          <span>{{ menuItem.title }}</span>
        </router-link>
      </li>
    </ul>
    <h1></h1>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const NavMenu = {
  setup() {
    const store = useStore();
    const menuList = computed(() => store.getters.getMenu);
    return { menuList };
  },
};
export default NavMenu;
</script>

<style lang="less" scoped>
@import url("./index");
</style>