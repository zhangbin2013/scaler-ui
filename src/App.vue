<template>
  <router-view/>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {ref, provide} from 'vue';
export default {
  name: 'App',
  setup() {
    const asideVisible = ref(false);
    provide('xxx', asideVisible);
  },
  components: {
    HelloWorld
  }
}
</script>
