/**
*Created by bin on 2020/9/23
*/
<template>
	<div>
		<button v-bind="$attrs">
			<slot/>
		</button>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Button',
	inheritAttrs: false,
	// 1.
	props: {
		disabled: Boolean
	},
	setup(props, context){
		// 在1.声明才能拿到值, attrs不用先声明
		// props不包含事件， attrs包含
		// props 没有声明的属性， 会跑到attrs里面
		// props支持string以外的类型， attrs只有string类型
		/*console.log({...props})
		console.log({...context.attrs})*/
	}
};
</script>

<style lang='scss' scoped>
div {
	border: 1px solid red;
}
</style>
