<template>
	<div class="bzg v-start">
		<div class="bzg_c sticky" data-col="l4">
			<slot name="sticky-content"></slot>
		</div>
		<div class="bzg_c content relative" data-col="l8">
			<slot name="main-content"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Sticky'
}
</script>

<style lang="scss" scoped>
@media #{$large} {
	.sticky {
		position: sticky;
		top: 74px;
	}

	.bzg_c.content {
		padding-left: 44px;
	}
}
</style>
