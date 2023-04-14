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
				title: 'saham syariah',
				heading: 'Investasi Syariah, Investasi <b>Penuh Berkah</b>',
				text: 'Lakukan transaksi saham, sukuk, dan reksa dana sesuai syariat islam yang aman dan penuh berkah.',
				url: '/belajar-investasi/syariah',
				image: 'produk-syariah.png'
			},
			services: [
				{
					text1: 'Produk saham yang halal.',
					text2:
						'Produk saham di MOST Syariah tergolong halal dan berfokus pada sistem bagi hasil dan risiko antara investor dengan emiten.'
				},
				{
					text1: 'Sistem transaksi islami.',
					text2:
						'Sistem transaksi yang dilakukan di MOST Syariah mengikuti seluruh ketentuan dan syariat islam.'
				},
				{
					text1: 'RDN terpercaya.',
					text2:
						'Rekening Dana Nasabah di MOST Syariah dijamin aman dan sesuai dengan prinsip syariah.'
				},
				{
					text1: 'Proses pembukaan rekening mudah.',
					text2:
						'Berkat MOST DigiSign, pembukaan rekening efek dan rekening dana jadi lebih cepat menggunakan teknologi digital signature.'
				}
			],
			promos: [
				{
					image: 'walking.jpeg',
					title: 'Promo Cashback Reksa Dana Syariah',
					desc: 'Dapatkan saldo RDN kembali (cashback) Rp 50.000,- untuk pembelian produk Reksa Dana Syariah di MOST!'
				},
				{
					image: 'scissors.jpeg',
					title: 'Promo Cashback Pembelian Saham',
					desc: 'Dapatkan cashback sebesar Rp50.000,- untuk pembelian Saham Big Cap di website MOST!'
				}
			],
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
