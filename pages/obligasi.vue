<template>
	<main class="site-main">
		<section>
			<div class="container">
				<PageHeader :data="header" />
			</div>
		</section>
		<section>
			<Promo :content="promos" />
		</section>
		<LastSection :data="footer" />
	</main>
</template>

<script>
import PageHeader from '~/components/product/PageHeader.vue'
import Promo from '~/components/product/Promo.vue'
import LastSection from '~/components/LastSection.vue'

export default {
	components: {
		PageHeader,
		Promo,
		LastSection
	},
	data() {
		return {
			header: {
				title: 'obligasi',
				heading: 'Penawaran Obligasi <b>Terbaik</b>',
				text: 'Dapatkan penawaran obligasi pemerintah dan obligasi korporasi terbaik, dengan imbal hasil yang menarik.',
				url: '/belajar-investasi/obligasi',
				image: 'produk-obligasi.png'
			},
			promos: [
				{
					image: 'pot.jpg',
					title: 'Promo Penawaran Obligasi SBN SERI ORI017',
					desc: 'Dapatkan berbagai keuntungan menarik dengan memilih produk obligasi SBN di MOST!'
				},
				{
					image: 'book.jpg',
					title: 'Promo Cashback Pembelian Saham',
					desc: 'Dapatkan cashback sebesar Rp50.000,- untuk pembelian Saham Big Cap di website MOST!'
				}
			],
			footer: {
				title: 'Obligasi',
				desc: 'Apa itu obligasi atau surat utang? Apa saja keuntungan dan risikonya? Pahami di sini.',
				url: '/belajar-investasi/obligasi',
				button: 'BELAJAR SEKARANG'
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>
