<template>
  <router-view/>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {ref, provide} from 'vue';
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width>500);
    provide('asideVisible', asideVisible);
  },
  components: {
    HelloWorld
  }
}
</script>
