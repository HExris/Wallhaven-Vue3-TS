<template>
  <div id="header">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const Header = defineComponent({
  name: 'Header',
  props: {
    message: {
      type: String,
      required: true
    }
  }
})
export default Header
</script>
