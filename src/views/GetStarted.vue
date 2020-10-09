<template>
	<article class="markdown-body" v-html="md">
	</article>
</template>

<script lang="ts">
import md from '../markdown/get-started.md';
export default {
	name: "GetStarted",
	data() {
		return {
			md
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
