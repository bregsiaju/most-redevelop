<template>
	<div id="app">
		<headerMainHeader />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
export default {
	name: 'DefaultLayout',
	head() {
		return {
			link: [
				{
					rel: 'canonical',
					href: process.env.BASE_URL + this.$route.path
				}
			]
		}
	}
}
</script>
