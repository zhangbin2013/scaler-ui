<template>
  <section>
    <Topnav/>
    <div class="content">
      <aside>边栏</aside>
      <main>主内容</main>
    </div>
  </section>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
name: "Doc",
  components: {Topnav}
}
</script>

<style scoped>

</style>