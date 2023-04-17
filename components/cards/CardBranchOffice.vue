<template>
	<div class="card">
		<h4>{{ content.name }}</h4>
		<hr />
		<p>{{ content.address }}</p>
		<p class="mb-0">Telp: {{ content.telp }}</p>
	</div>
</template>

<script>
export default {
	name: 'CardBranchOffice',
	props: {
		content: {
			type: Object,
			default: () => {}
		}
	}
}
</script>

<style lang="scss" scoped>
hr {
	border-top: 2px solid $primary-blue;
	width: 15%;
	margin-bottom: 18px;
}

.card {
	box-shadow: 0px 6px 30px #29292914;
	border-radius: 3px;
	padding: 25px 30px;
	height: 100%;

	p {
		font-size: 1em;
		color: $grey;
		line-height: 1.4;
	}

	h4 {
		font-size: 1.25em;
		margin-bottom: 18px;
	}
}

@media #{$large} {
	.content-wrapper {
		width: 65%;
	}
}
</style>
