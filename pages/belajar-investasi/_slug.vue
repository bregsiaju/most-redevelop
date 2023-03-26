<template>
	<main class="site-main">
		<h1>{{ slug }}</h1>
	</main>
</template>

<script>
export default {
	// eslint-disable-next-line require-await
	async asyncData({ params }) {
		const slug = params.slug // When calling /abc the slug will be "abc"
		return { slug }
	}
}
</script>
