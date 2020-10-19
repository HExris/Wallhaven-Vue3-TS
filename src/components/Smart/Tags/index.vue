<template>
  <div class="pop_tags">
    <span
      class="pop_tag_item"
      v-for="tagItem in renderList"
      :key="tagItem.tagName"
      :data-saturate="tagItem.saturate"
    >
      <router-link :to="{name: 'SearchResults', query: {
          q: tagItem.tagName 
      }}">{{tagItem.tagName}}</router-link>
    </span>
    <span class="more">
      <router-link :to="{ name: 'Tags' }">More tags...</router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
const Tags = {
  name: "Tags",
  setup() {
    const store = useStore();
    const tagList = computed(() => {
      return store.getters.getTags;
    });
    interface Tag {
      tagName: string;
    }
    interface RenderTags {
      tagName: string;
      saturate: string;
    }
    const getRenderSaturate = (): string => {
      const saturateRandomList: string[] = ["80%", "100%", "150%"];
      return saturateRandomList[Math.floor(Math.random() * 3)];
    };
    const renderList = tagList.value.map(
      (tag: Tag): RenderTags => {
        return { ...tag, saturate: getRenderSaturate() };
      }
    );
    return { renderList };
  },
};
export default Tags;
</script>

<style lang="less" scoped>
@import url("./index");
</style>