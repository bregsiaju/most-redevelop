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
		<section>
			<Promo :content="promos" />
		</section>
		<LastSection :data="footer" />
	</main>
</template>

<script>
import PageHeader from '~/components/product/PageHeader.vue'
import Service from '~/components/product/Service.vue'
import Promo from '~/components/product/Promo.vue'
import LastSection from '~/components/LastSection.vue'

export default {
	components: {
		PageHeader,
		Service,
		Promo,
		LastSection
	},
	data() {
		return {
			header: {
				title: 'saham',
				heading: 'Investasi Saham yang <b>Aman</b>',
				text: 'Dapatkan akses jual beli saham bersama partner investasi terpercaya di pasar modal Indonesia.',
				url: '/belajar-investasi/saham',
				image: 'produk-saham.png'
			},
			services: [
				{
					text1: 'Layanan transaksi yang fleksibel.',
					text2:
						'Lakukan transaksi secara mandiri atau dibantu broker terpercaya.'
				},
				{
					text1: 'Layanan pembiayaan dengan harga kompetitif.',
					text2: 'Tersedia layanan pembiayaan dengan harga bersaing.'
				},
				{
					text1: 'Akses lengkap via satu aplikasi.',
					text2: 'Akses berbagai kemudahan hanya dengan satu aplikasi. '
				},
				{
					text1: 'Training investasi gratis.',
					text2:
						'Dapatkan training gratis untuk memahami segala hal tentang investasi.'
				}
			],
			promos: [
				{
					image: 'book.jpg',
					title: 'Promo Cashback Pembelian Saham',
					desc: 'Dapatkan cashback sebesar Rp50.000,- untuk pembelian Saham Big Cap di website MOST!'
				},
				{
					image: 'scissors.jpeg',
					title: 'Promo Cashback Pembelian Saham',
					desc: 'Dapatkan cashback sebesar Rp50.000,- untuk pembelian Saham Big Cap di website MOST!'
				}
			],
			footer: {
				title: 'Saham',
				desc: 'Seperti apakah cara kerja saham dan apa keuntungan serta risikonya? Pelajari semuanya lebih lanjut di sini.',
				url: '/belajar-investasi/saham',
				button: 'BELAJAR SEKARANG'
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>
