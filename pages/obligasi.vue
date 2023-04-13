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
				title: 'obligasi',
				heading: 'Penawaran Obligasi <b>Terbaik</b>',
				text: 'Dapatkan penawaran obligasi pemerintah dan obligasi korporasi terbaik, dengan imbal hasil yang menarik.',
				url: '/belajar-investasi/obligasi',
				image: 'produk-obligasi.png'
			},
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
