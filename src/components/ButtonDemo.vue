<template>
	<section>
		<h1>Button 示例</h1>
    <Demo :component="Button1Demo"></Demo>
    <Demo :component="Button2Demo"></Demo>
    <Demo :component="Button3Demo"></Demo>
    <Demo :component="Button4Demo"></Demo>
    <Demo :component="Button5Demo"></Demo>

		<!--<ul class="note">
			<li>vue3 属性绑定</li>
			<li>默认所有属性都绑定到根元素</li>
			<li>使用inheritAttrs:false可以取消默认绑定</li>
			<li>使用$attrs或者context.attrs获取所有属性</li>
			<li>使用const{size, ...rest} = context.attrs将属性分开</li>
		</ul>-->
	</section>
</template>

<script lang="ts">
import Button1Demo from './Button1.demo.vue';
import Button2Demo from './Button2.demo.vue';
import Button3Demo from './Button3.demo.vue';
import Button4Demo from './Button4.demo.vue';
import Button5Demo from './Button5.demo.vue';
import Demo from './Demo.vue';

export default {
	name: 'ButtonDemo',
	components: {
    Demo,
	},
	setup() {
		return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo
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
