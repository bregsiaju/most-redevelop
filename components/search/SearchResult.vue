<template>
	<div>
		<div v-for="(item, i) in content" :key="i">
			<h5 class="category-title">{{ item.category }}</h5>
			<ResultItem
				v-for="(data, x) in item.data"
				:key="x"
				:content-item="data"
			/>
		</div>
	</div>
</template>

<script>
import ResultItem from '~/components/search/ResultItem.vue'

export default {
	name: 'SearchResult',
	components: {
		ResultItem
	},
	props: {
		content: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.category-title {
	color: $primary;
	text-transform: uppercase;
	margin-bottom: 24px;
}
</style>
