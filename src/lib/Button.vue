/**
*Created by bin on 2020/9/23
*/
<template>
	<button class="sc-button" :class="classes" :disabled="disabled">
		<span v-if="loading" class="sc-loadingIndicator"></span>
		<slot/>
	</button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
	name: 'Button',
	// inheritAttrs: false, //使用inheritAttrs:false可以取消默认绑定-vue 属性继承
	// 1.
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		level: {
			type: String,
			default: 'normal'
		},
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
		const {theme, size, level} = props;
		const classes = computed(() => {
			return {
				[`sc-theme-${theme}`]: theme,
				[`sc-size-${size}`]: size,
				[`sc-level-${level}`]: level,
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
$red: #e8461a;
$grey: grey;
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
	transition: background 250ms;
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
		padding: 0 16px;
	}
	&.sc-size-small {
		font-size: 12px;
		height: 20px;
		padding: 0 4px;
	}
	&.sc-theme-button {
		&.sc-level-main {
			background: $blue;
			color: white;
			border-color: $blue;
			&:hover,
			&:focus {
				background: darken($blue, 10%);
				border-color: darken($blue, 10%);
			}
		}
		&.sc-level-danger {
			background: $red;
			border-color: $red;
			color: white;
			&:hover,
			&:focus {
				background: darken($red, 10%);
				border-color: darken($red, 10%);
			}
		}
	}
	&.sc-theme-link {
		&.sc-level-danger {
			color: $red;
			&:hover,
			&:focus {
				color: darken($red, 10%);
			}
		}
	}
	&.sc-theme-text {
		&.sc-level-main {
			color: $blue;
			&:hover,
			&:focus {
				color: darken($blue, 10%);
			}
		}
		&.sc-level-danger {
			color: $red;
			&:hover,
			&:focus {
				color: darken($red, 10%);
			}
		}
	}
	&.sc-theme-button {
		&[disabled] {
			cursor: not-allowed;
			color: $grey;
			&:hover {
				border-color: $grey;
			}
		}
	}
	&.sc-theme-link, &.sc-theme-text {
		&[disabled] {
			cursor: not-allowed;
			color: $grey;
		}
	}
	> .sc-loadingIndicator{
		width: 14px;
		height: 14px;
		display: inline-block;
		margin-right: 4px;
		border-radius: 8px;
		border-color: $blue $blue $blue transparent;
		border-style: solid;
		border-width: 2px;
		animation: sc-spin 1s infinite linear;
	}
}
@keyframes sc-spin {
	0%{transform: rotate(0deg)}
	100%{transform: rotate(360deg)}
}
</style>
