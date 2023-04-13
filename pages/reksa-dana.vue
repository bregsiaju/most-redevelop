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
				title: 'reksa dana',
				heading: 'Reksa Dana <b>Tanpa Ribet</b>',
				text: 'Investasi reksa dana yang terjangkau dan bebas ribet melalui MOSTFund.',
				url: '/belajar-investasi/reksa-dana',
				image: 'produk-reksadana.png'
			},
			services: [
				{
					text1: 'Dikelola oleh manajer investasi profesional.',
					text2:
						'Investasi reksa dana Anda sepenuhnya dikelola oleh manajer investasi profesional yang terpilih. '
				},
				{
					text1: 'Transaksi melalui berbagai platform',
					text2:
						'Lakukan transaksi melalui berbagai platform yang tersedia untuk memudahkan Anda.'
				},
				{
					text1: 'Transaksi fleksibel.',
					text2:
						'Nikmati kemudahan transaksi dengan modal terjangkau kapan saja, di mana saja.'
				},
				{
					text1: 'Kategori fund sesuai profil risiko',
					text2:
						'Dapatkan kategori fund yang sudah sesuai dengan profil risiko Anda.'
				}
			],
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
