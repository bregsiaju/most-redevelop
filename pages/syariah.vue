<template>
	<main class="site-main">
		<LastSection :data="footer" />
	</main>
</template>

<script>
import LastSection from '~/components/LastSection.vue'

export default {
	components: {
		LastSection
	},
	data() {
		return {
			footer: {
				title: 'Syariah',
				desc: 'Pahami segala detail mekanisme transaksi saham yang berdasar pada prinsip syariah di sini.',
				url: '/belajar-investasi/syariah',
				button: 'BELAJAR SEKARANG'
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>
