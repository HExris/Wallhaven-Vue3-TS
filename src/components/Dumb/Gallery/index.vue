<template>
  <div class="gallery">
    <div class="image_wrapper" v-for="(item, index) in imgList" :key="index">
      <img :src="item" />
    </div>
  </div>
</template>
<script lang="ts">
import getAllImgList from "@/api/getList.ts";
import { ref, onMounted, h, reactive } from "vue";
const Gallery = {
  name: "Gallery",
  setup() {
    const imgList = ref<string[]>([""]);
    onMounted(() => {
      //   async () => {
      getAllImgList().then((res: any) => {
        console.log("1", imgList.value);
        alert("onMounted");
        imgList.value = res;
      });
      //   };
    });
    // return () => h('div', [imgList.value]);
    const readersNumber = ref(0);
    const book = reactive({ title: "Vue 3 Guide" });
    return { imgList };
  },
};
export default Gallery;
</script>