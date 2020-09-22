<template>
  <section>
		:value 和 @input 让父子组件进行交流（组件通信）
		<Switch v-model:value="val"></Switch>
  </section>
</template>

<script>
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
export default {
  name: 'SwitchDemo',
	components: {
  	Switch
	},
	setup(){
  	// 创建内部数据
  	const val = ref(false);
  	return {
  		val
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
