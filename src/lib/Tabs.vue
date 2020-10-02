<template>
	<div class="sc-tabs">
		<div class="sc-tabs-nav" ref="container">
			<div class="sc-tabs-nav-item" :class="{selected: title=== selected}"
					 :ref="el => { if (title===selected) selectedItem = el }"
					 @click="select(title)"
					 v-for="(title,index) in titles">{{ title }}
			</div>

			<div class="sc-tabs-nav-indicator" ref="indicator"></div>
		</div>
		<div class="sc-tabs-content">
			<component class="sc-tabs-content-item"
								 :class="{selected: c.props.title=== selected}"
								 v-for="(c,index) in defaults" :is="c" :key="index"/>
		</div>

	</div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import {ref, onMounted, watchEffect} from 'vue';

export default {
	name: "Tabs",
	props: {
		selected: {
			type: String
		}
	},
	setup(props, context) {
		console.log({...context.slots.default()})

		const selectedItem = ref<HTMLDivElement>(null);
		const indicator = ref<HTMLDivElement>(null);
		const container = ref<HTMLDivElement>(null);

		onMounted(() => {
			watchEffect(() => {
				const {width} = selectedItem.value.getBoundingClientRect();
				indicator.value.style.width = width + 'px';

				const {left: left2} = container.value.getBoundingClientRect();
				const {left: left1} = selectedItem.value.getBoundingClientRect();
				indicator.value.style.left = left1 - left2 + 'px';
			});
		})

		const defaults = context.slots.default();
		defaults.forEach(tag => {
			if (tag.type !== Tab) {
				throw new Error('子组件不是Tab');
			}
		})
		const titles = defaults.map(d => d.props.title);

		const select = (title) => {
			context.emit('update:selected', title)
		}
		return {
			defaults,
			titles,
			selectedItem,
			indicator,
			container,
			select,
		}
	}
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.sc-tabs {
	&-nav {
		display: flex;
		color: $color;
		border-bottom: 1px solid $border-color;
		position: relative;

		&-indicator {
			position: absolute;
			height: 3px;
			background: $blue;
			left: 0;
			bottom: -1px;
			width: 100px;
			transition: all 250ms;
		}

		&-item {
			padding: 8px 0;
			margin: 0 16px;
			cursor: pointer;

			&:first-child {
				margin-left: 0;
			}

			&.selected {
				color: $blue;
			}
		}
	}

	&-content {
		padding: 8px 0;

		&-item {
			display: none;

			&.selected {
				display: block;
			}
		}

	}
}
</style>
