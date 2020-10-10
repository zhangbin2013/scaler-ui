<template>
	<div>
		<button class="sc-switch" :class="{'sc-checked': value}" :disabled="disabled" @click="butClick"><span></span></button>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Switch',
	// props 值不允许修改
	props: {
		value: Boolean,
		disabled: {
			type: Boolean,
			default: false
		}
	},
	setup(props, context) {
		const butClick = () => {
			// this.$emit
			// 1. 事件名称 2.$event
			context.emit('update:value', !props.value)
		}
		return {
			butClick
		}
	},
	// vue3 几乎用不到， 主要使用setup(), components, props
	methods: {}
};
</script>

<style lang='scss' scoped>
$h: 22px;
$h2: $h - 4px;
.sc-switch {
	height: $h;
	width: $h * 2;
	border: none;
	background: #bfbfbf;
	border-radius: $h/2;
	position: relative;

	> span {
		position: absolute;
		top: 2px;
		left: 2px;
		height: $h2;
		width: $h2;
		background: white;
		border-radius: $h2 / 2;
		transition: all 250ms;
	}

	&.sc-checked {
		background: #1890ff;

		> span {
			left: calc(100% - #{$h2} - 2px);
		}
	}

	&:focus {
		outline: none;
	}

	&:active {
		> span {
			width: $h2 + 4px;
		}
	}

	&.sc-checked:active {
		> span {
			width: $h2 + 4px;
			margin-left: -4px;
		}
	}
}
</style>
