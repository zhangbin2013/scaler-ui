/**
*Created by bin on 2020/9/23
*/
<template>
	<button class="sc-button" :class="classes">
		<slot/>
	</button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
	name: 'Button',
	inheritAttrs: false,
	// 1.
	props: {
		disabled: Boolean,
		theme: {
			type: String,
			default: 'button'
		},
		size: {
			type: String,
			default: 'normal'
		}
	},
	setup(props, context) {
		// 在1.声明才能拿到值, attrs不用先声明
		// props不包含事件， attrs包含
		// props 没有声明的属性， 会跑到attrs里面
		// props支持string以外的类型， attrs只有string类型
		/*console.log({...props})
		console.log({...context.attrs})*/
		const {theme, size} = props;
		const classes = computed(() => {
			return {
				[`sc-theme-${theme}`]: theme,
				[`sc-size-${size}`]: size,
			}
		});

		return {
			classes
		}
	}
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.sc-button {
	box-sizing: border-box;
	height: $h;
	padding: 0 12px;
	cursor: pointer;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	white-space: nowrap;
	background: white;
	color: $color;
	border: 1px solid $border-color;
	border-radius: $radius;
	box-shadow: 0 1px 0 fade-out(black, 0.95);

	& + & {
		margin-left: 8px;
	}

	&:hover,
	&:focus {
		color: $blue;
		border-color: $blue;
	}

	&:focus {
		outline: none;
	}

	&::-moz-focus-inner {
		border: 0;
	}

	&.sc-theme-link {
		border-color: transparent;
		box-shadow: none;
		color: $blue;

		&:hover,
		&:focus {
			color: lighten($blue, 10%);
		}
	}

	&.sc-theme-text {
		border-color: transparent;
		box-shadow: none;
		color: inherit;

		&:hover,
		&:focus {
			background: darken(white, 5%);
		}
	}

	&.sc-size-big {
		font-size: 24px;
		height: 48px;
		padding: 0 16px
	}

	&.sc-size-small {
		font-size: 12px;
		height: 20px;
		padding: 0 4px;
	}
}
</style>
