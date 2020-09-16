<template>
  <section class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Topnav'
};
</script>

<style lang='scss' scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li{
      margin: 0 1em;
      list-style: none;
    }
  }
}
</style>