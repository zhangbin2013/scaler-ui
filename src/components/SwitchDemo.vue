<template>
  <section>
		<Switch :value="val" @input="val = $event"></Switch>
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
  	const val = ref(false);
  	return {
  		val
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
