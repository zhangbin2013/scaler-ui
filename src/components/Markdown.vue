<template>
	<article class="markdown-body" v-html="content">

	</article>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
	name: 'Markdown',
	props: {
		content: {
			type: String,
			required: true
		}
	},
	setup(props) {
		/*const content = ref < string > (null)
		// 异步加载 markdown 文件
		import(props.path).then(result =>{
			content.value = result.default;
		})
		return {
			content
		}*/
	}
}
</script>

<style lang="scss" scoped>

</style>
