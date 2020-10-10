<template>
	<section>
		<h1>Dialog 示例</h1>
		<Demo :component="Dialog1Demo"></Demo>
		<Demo :component="Dialog2Demo"></Demo>
	</section>
</template>

<script lang="ts">
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';

import Demo from "./Demo.vue";

export default {
	name: 'DialogDemo',
	components: {Demo},
	setup() {
		return {
			Dialog1Demo,
			Dialog2Demo
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
