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
				title: 'saham',
				heading: 'Investasi Saham yang <b>Aman</b>',
				text: 'Dapatkan akses jual beli saham bersama partner investasi terpercaya di pasar modal Indonesia.',
				url: '/belajar-investasi/saham',
				image: 'produk-saham.png'
			},
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
