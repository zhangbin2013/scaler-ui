<template>
  <section class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </section>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';
export default {
  name: 'Topnav',
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    console.log('获取topnav的 asideVisible: '+ asideVisible.value);
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value
    }
    return {
      toggleMenu
    }
  }
};
</script>

<style lang='scss' scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
      list-style: none;
    }
  }
}
</style>