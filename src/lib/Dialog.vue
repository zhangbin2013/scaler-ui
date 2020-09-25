<template>
	<div class="sc-dialog-overlay"></div>
	<div class="sc-dialog-wrapper">
		<header>标题</header>
		<main><p>第一行</p>
			<p>第二话</p></main>
		<footer>
			<Button>ok</Button>
			<Button>cancel</Button>
		</footer>
	</div>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
	name: "Dialog",
	components: {Button},
	setup() {
	}
}
</script>

<style lang="scss">


</style>
