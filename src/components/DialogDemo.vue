<template>
	<section>
		<div>Dialog 示例</div>
		<h1>示例1</h1>
		<div style="position: relative;z-index: 1">
			<Button @click="toggle">toggle</Button>
			<!--同时存在 :visible  和 @update:visible="x=$event 可替换为如下 v-model:visible"-->
			<!--<Dialog :visible="x" @update:visible="x=$event"/>-->
			<Dialog
				v-model:visible="x"
				:close-on-click-overlay="true"
				:ok="fn1"
				:cancel="fn2">
				<template v-slot:title>
					<strong> 加粗标题</strong>
				</template>
				<template v-slot:content>
					<div>内容一</div>
					<div>内容二</div>
				</template>
			</Dialog>
		</div>
		<h2>示例2</h2>
		<div>
			<Button @click="showDialog">toggle</Button>
		</div>
		<div style="position: relative; z-index: 2; width: 300px; height: 300px; background: green;left: 50%"></div>
	</section>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {openDialog} from '../lib/openDialog';
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

		const showDialog = () => {
			openDialog({
				title: '标题',
				content: '内容',
				closeOnClickOverlay: false,
				ok() {
					console.log('ok')
					return false
				},
				cancel() {
					console.log('cancel')
				}
			});
		}

		return {
			x,
			toggle,
			fn1,
			fn2,
			showDialog
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
