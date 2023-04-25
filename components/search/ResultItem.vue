<template>
	<nuxt-link to="">
		<div class="bzg">
			<div class="bzg_c" data-col="s4, m2, l1">
				<div class="responsive-media r-square">
					<img :src="`/assets/img/search/${contentItem.image}`" />
				</div>
			</div>
			<div class="bzg_c" data-col="s8, m10, l11">
				<h5>{{ contentItem.title }}</h5>
				<p class="mb-0">{{ contentItem.description }}</p>
			</div>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	name: 'ResultItem',
	props: {
		contentItem: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.bzg {
	padding-bottom: 32px;
}

h5 {
	margin-bottom: 4px;
}

img {
	border-radius: 4px;
}

a:hover {
	color: $primary-blue !important;

	p {
		color: $dark-grey;
	}
}
</style>
