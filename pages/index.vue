<template>
	<main class="site-main">
		<div class="container">
			<h1>Home</h1>
			<Logo />
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {}
	},
	head() {
		return {
			...this.$SEOMeta({
				metaTitle: 'Suit Baze'
			})
		}
	},
	jsonld() {
		return this.$jsonLD({
			type: 'LocalBusiness',
			jsonLDObjects: {
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Jakarta, Indonesia',
					postalCode: '12510',
					streetAddress: 'Jl. Pejaten Barat II No. 3A'
				},
				email: 'contact(at)suitmedia.com',
				name: 'Suitmedia',
				telephone: '+62 21 719 6877',
				legalName: 'PT Suitmedia Kreasi Indonesia',
				location: 'Jakarta, Bandung, Yogyakarta, Singapore',
				description: 'Digital Agency Indonesia'
			}
		})
	}
}
</script>

<style lang="scss" scoped></style>
