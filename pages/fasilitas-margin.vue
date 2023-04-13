<template>
	<main class="site-main">
		<section>
			<div class="container">
				<PageHeader :data="header" />
			</div>
		</section>
		<section>
			<Service :content="services" />
		</section>
		<LastSection :data="footer" />
	</main>
</template>

<script>
import PageHeader from '~/components/product/PageHeader.vue'
import Service from '~/components/product/Service.vue'
import LastSection from '~/components/LastSection.vue'

export default {
	components: {
		PageHeader,
		Service,
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
			services: [
				{
					text1: 'Biaya terjangkau.',
					text2:
						'Sebagai trader, Anda hanya dikenakan biaya 0,05% per hari demi profit serta momentum yang maksimal saat bertransaksi saham.'
				},
				{
					text1: 'Minimnya risiko forced sell.',
					text2:
						'Berbeda dengan rekening reguler, MOST hanya berhak melakukan forced sell ketika nilai jaminan kurang atau sama dengan 130% bagi para nasabah fasilitas marjin.'
				},
				{
					text1: 'Holding period yang fleksibel.',
					text2:
						'Para pengguna fasilitas marjin memiliki kenyamanan lebih saat bertransaksi berkat holding period hingga 2 tahun.'
				},
				{
					text1: 'Terhindar dari suspend buy.',
					text2:
						'Dengan fasilitas marjin, Anda tetap dapat melakukan pembelian saham dengan limit yang tersedia selama collateral ratio tercukupi.'
				}
			],
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
