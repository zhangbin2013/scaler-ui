<template>
	<div class="sc-tabs">
		<div class="sc-tabs-nav">
			<div class="sc-tabs-nav-item" :class="{selected: title=== selected}"
					 @click="select(title)"
					 v-for="(title,index) in titles">{{ title }}
			</div>
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

export default {
	name: "Tabs",
	props: {
		selected: {
			type: String
		}
	},
	setup(props, context) {
		console.log({...context.slots.default()})

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
			select
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
