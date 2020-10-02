<template>
	<div>
		<div v-for="(title,index) in titles">{{title}}</div>
		<component v-for="(c,index) in defaults" :is="c" :key="index"/>
	</div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";

export default {
	name: "Tabs",
	setup(props, context) {
		console.log({...context.slots.default()})

		const defaults = context.slots.default();
		defaults.forEach(tag => {
			if(tag.type !== Tab){
				throw new Error('子组件不是Tab');
			}
		})
		const titles = defaults.map(d => d.props.title)
		return {
			defaults,
			titles
		}
	}
};
</script>

<style lang="scss">

</style>
