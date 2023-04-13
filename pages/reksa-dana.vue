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
				title: 'reksa dana',
				heading: 'Reksa Dana <b>Tanpa Ribet</b>',
				text: 'Investasi reksa dana yang terjangkau dan bebas ribet melalui MOSTFund.',
				url: '/belajar-investasi/reksa-dana',
				image: 'produk-reksadana.png'
			},
			footer: {
				title: 'Reksa Dana',
				logo: 'reksadana-logo.png',
				desc: 'Reksa Dana adalah pilihan tepat bagi Anda yang baru memulai investasi. Pahami dulu keuntungan serta risikonya di sini.',
				url: '/belajar-investasi/reksa-dana',
				button: 'BELAJAR SEKARANG'
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>
