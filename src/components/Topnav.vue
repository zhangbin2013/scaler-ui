<template>
  <section class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggle-aside" @click="toggleMenu"></span>
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
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    margin: 0;

    > li {
      margin: 0 1em;
      list-style: none;
    }
  }
  .toggle-aside{
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu{display: none}
    > .logo{margin: 0 auto}
    >.toggle-aside{display: inline-block;}
  }
}
</style>