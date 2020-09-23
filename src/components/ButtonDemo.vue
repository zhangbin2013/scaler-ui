<template>
	<section>
		<div>Button 示例</div>
		<h1>示例1</h1>
		<Button @click="onClick"
						@focus="onClick"
						size="mini"
						disabled
						@mouseover="onClick">按钮
		</Button>
		<ul class="note">
			<li>vue3 属性绑定</li>
			<li>默认所有属性都绑定到根元素</li>
			<li>使用inheritAttrs:false可以取消默认绑定</li>
			<li>使用$attrs或者context.attrs获取所有属性</li>
			<li>使用const{size, ...rest} = context.attrs将属性分开</li>
		</ul>
	</section>
</template>

<script>
import Button from '../lib/Button.vue';

export default {
	name: 'ButtonDemo',
	components: {
		Button
	},
	setup() {
		const onClick = () => {
			console.log('xxx');
		};

		return {
			onClick
		};
	}
};
</script>

<style lang="scss" scoped>
section {
	.note {
		text-align: left;

		> li {
			margin: 4px auto;

			&:first-child {
				font-weight: bold;
				list-style: none;
				margin-left: -15px;
			}
		}

	}
}
</style>
