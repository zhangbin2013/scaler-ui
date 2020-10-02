<template>
	<section>
		<div>Dialog 示例</div>
		<h1>示例1</h1>
		<Button @click="toggle">toggle</Button>
		<!--同时存在 :visible  和 @update:visible="x=$event 可替换为如下 v-model:visible"-->
		<!--<Dialog :visible="x" @update:visible="x=$event"/>-->
		<Dialog v-model:visible="x" :close-on-click-overlay="true" :ok="fn1" :cancel="fn2"/>
	</section>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from "../lib/Button.vue";
import {ref} from 'vue';

export default {
	name: 'DialogDemo',
	components: {Button, Dialog},
	setup() {
		const x = ref(false);

		const toggle = () => {
			x.value = !x.value;
		}

		const fn1 = () => {
			return false
		}

		const fn2 = () => {
			return true
		}
		return {
			x,
			toggle,
			fn1,
			fn2
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
