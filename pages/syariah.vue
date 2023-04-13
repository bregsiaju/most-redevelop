<template>
	<main class="site-main">
		<section>
			<div class="container">
				<PageHeader :data="header" />
			</div>
		</section>
		<LastSection :data="footer" />
	</main>
</template>

<script>
import PageHeader from '~/components/product/PageHeader.vue'
import LastSection from '~/components/LastSection.vue'

export default {
	components: {
		PageHeader,
		LastSection
	},
	data() {
		return {
			header: {
				title: 'saham syariah',
				heading: 'Investasi Syariah, Investasi <b>Penuh Berkah</b>',
				text: 'Lakukan transaksi saham, sukuk, dan reksa dana sesuai syariat islam yang aman dan penuh berkah.',
				url: '/belajar-investasi/syariah',
				image: 'produk-syariah.png'
			},
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
