<template>
	<section>
		<div>Button 示例</div>
		<h1>示例1</h1>
		<!--<Button @click="onClick"
						@focus="onClick"
						size="mini"
						disabled
						@mouseover="onClick">按钮
		</Button>-->
		<Button theme="button">hello-sc</Button>
		<Button theme="link">hello-sc</Button>
		<Button theme="text">hello-sc</Button>

		<h1>示例2</h1>
		<div>
			<Button size="big">大大大</Button>
			<Button>普普通</Button>
			<Button size="small">小小小</Button>
		</div>
		<div>
			<Button size="big" theme="link">大大大</Button>
			<Button theme="link">普普通</Button>
			<Button size="small" theme="link">小小小</Button>
		</div>
		<div>
			<Button size="big" theme="text">大大大</Button>
			<Button theme="text">普普通</Button>
			<Button size="small" theme="text">小小小</Button>
		</div>


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
