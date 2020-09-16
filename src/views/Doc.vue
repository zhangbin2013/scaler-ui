<template>
  <section>
    <Topnav/>
    <aside v-if="asideVisible">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>主内容</main>
  </section>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  name: "Doc",
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible'); //get
    console.log('获取doc的asideVisible: ' + asideVisible.value);
    return {
      asideVisible
    }
  },
  components: {
    Topnav
  }
}
</script>

<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px 0;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    padding: 0 22px;

    > li {
      padding: 6px 0;
      list-style: none;
    }
  }

  @media (max-width: 500px) {
    position: fixed;
    top: 50px;
    left: 0;
  }
}
</style>