<template>
  <div class="homepage_search_frame">
    <input
      type="text"
      class="search"
      :placeholder="placeholder"
      @focus="setFocusStyle"
      @blur="setBlurStyle"
    >
    <button :title="uploadBtnText"><i
        class="fa fa-camera"
        :alt="uploadBtnText"
      ></i></button>
    <div class="search_spacer"></div>
    <button :title="searchBtnText"><i
        class="fa fa-search"
        :alt="searchBtnText"
      ></i></button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
const Search = {
  name: "Search",
  setup() {
    const placeholder = ref("Search...");
    const uploadBtnText = ref("Search for similar images");
    const searchBtnText = ref("Search");
    const setFocusStyle = (): void => {
      const searchBox: HTMLElement | null = document.querySelector(
        ".homepage_search_frame"
      );

      if (searchBox) {
        searchBox.style.setProperty("background", `rgba(255, 255, 255, 0.2)`);
        searchBox.style.setProperty("transform", `translateY(0)`);
        searchBox.style.setProperty(
          "box-shadow",
          `rgba(0, 0, 0, 0.6) 2px 4px 12px`
        );
      }
    };
    const setBlurStyle = (): void => {
      const searchBox: HTMLElement | null = document.querySelector(
        ".homepage_search_frame"
      );

      if (searchBox) {
        searchBox.style.setProperty("transform", `translateY(2px)`);
        searchBox.style.setProperty("background", `rgba(255, 255, 255, 0.1)`);
        searchBox.style.setProperty(
          "box-shadow",
          `rgba(0, 0, 0, 0.6) 2px 2px 4px`
        );
      }
    };
    return {
      placeholder,
      setFocusStyle,
      setBlurStyle,
      uploadBtnText,
      searchBtnText,
    };
  },
};
export default Search;
</script>

<style lang="less" scoped>
@import url("./index");
</style>