<template>
	<main class="site-main">
		<div class="container">
			<DetailObligasi />
		</div>
		<LastSection :data="footer" />
	</main>
</template>

<script>
import DetailObligasi from '~/components/product/DetailObligasi.vue'
import LastSection from '~/components/LastSection.vue'

export default {
	components: {
		DetailObligasi,
		LastSection
	},
	data() {
		return {
			footer: {
				title: 'MOST SBN',
				desc: 'Pahami lebih lanjut tentang informasi seputar MOST SBN disini',
				url: '',
				button: 'MOST SBN'
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>
