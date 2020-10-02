<template>
	<div>
		Tabs
		<component :is="defaults[0]"/>
		<component :is="defaults[1]"/>
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
		return {
			defaults
		}
	}
};
</script>

<style lang="scss">

</style>
