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
				title: 'fasilitas margin',
				heading: 'Fasilitas Pinjaman <b>Aman</b>',
				text: 'Nikmati transaksi lebih besar dengan Holding period lebih panjang dan interest fee lebih murah dari rekening regular.',
				url: '/belajar-investasi/fasilitas-margin',
				image: 'produk-margin.png'
			},
			footer: {
				title: 'Belajar Fasilitas Marjin',
				desc: 'Pahami lebih lanjut apa itu fasilitas marjin pada ringkasan berikut ini.',
				url: '/belajar-investasi/fasilitas-margin',
				button: 'BELAJAR SEKARANG'
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>
