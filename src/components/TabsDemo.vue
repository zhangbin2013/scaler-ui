<template>
	<section>
		<h1>Tabs 示例</h1>
		<Demo :component="Tabs1Demo"></Demo>
	</section>
</template>

<script lang="ts">
import Tabs1Demo from './Tabs1.demo.vue';
import Demo from './Demo.vue';
export default {
	name: 'TabsDemo',
	components: {
		Demo
	},
	setup() {
		return {
			Tabs1Demo
		}
	}
};
</script>

<style scoped>

</style>
