<template>
  <section>
    <Topnav/>
    <div class="banner">
      <h1>scaler-ui</h1>
      <h2>一个不错的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/zhangbin2013/scaler-ui/tree/dev" target="_blank">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
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
<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background: lightgreen;
	text-align: center;

  .empty {
    width: 100%;
    height: 1px;
  }

  > .actions {
    padding: 8px 0;
    box-sizing: border-box;

    a {
      margin: 0 8px;
      display: inline-block;
      background: #fff;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
