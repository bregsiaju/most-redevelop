<template>
	<div class="bzg v-start">
		<div class="bzg_c pt-32 sticky" data-col="m3">
			<slot name="sticky-content"></slot>
		</div>
		<div class="bzg_c pt-32 content relative" data-col="m9">
			<slot name="main-content"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'StickyHelpers'
}
</script>

<style lang="scss" scoped>
@media #{$medium} {
	.sticky {
		position: sticky;
		top: 74px;
	}
}
</style>
