<template>
	<div class="bzg v-start">
		<div class="bzg_c pt-28 sticky" data-col="l4">
			<slot name="sticky-content"></slot>
		</div>
		<div class="bzg_c content pt-28" data-col="l8">
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
.sticky {
	@media #{$large} {
		position: sticky;
		top: 74px;
	}
}

.bzg_c.content {
	padding-left: 44px;
	background-image: linear-gradient(90deg, #f2f2f2, 35%, #fff 35%);
	background-position: 44px;
}
</style>
