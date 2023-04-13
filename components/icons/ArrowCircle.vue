<template>
	<i :class="`icon-arrow-${direction}`"></i>
</template>

<script>
export default {
	name: 'ArrowCircle',
	props: {
		direction: {
			type: String,
			default: 'right'
		}
	}
}
</script>

<style lang="scss" scoped>
i.icon-arrow-right {
	font-size: 16px;
	border-radius: 50%;
	background-color: $primary;
	color: white;
	padding: 8px;
	margin-right: 16px;
}
</style>
