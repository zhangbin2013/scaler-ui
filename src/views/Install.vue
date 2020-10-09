<template>
	<article class="markdown-body" v-html="md">
	</article>
</template>

<script lang="ts">
import md from '../markdown/install.md';
export default {
	name: 'Install',
	data() {
		return {
			md
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
