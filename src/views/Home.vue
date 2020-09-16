<template>
  <section>
    <Topnav/>
    <div class="banner">
      <h1>scaler-ui</h1>
      <h2>一个不错的UI框架</h2>
      <p class="actions"><a href="https://github.com/zhangbin2013/scaler-ui/tree/dev" target="_blank">GitHub</a><a
          href="">开始</a></p>
    </div>
  </section>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
  name: 'Home',
  components: {Topnav}
};
</script>