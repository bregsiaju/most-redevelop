<template>
	<div class="product">
		<homepageProductItem :tabs="tabs" />
	</div>
</template>

<script>
export default {
	name: 'Product',
	data() {
		return {
			tabs: [
				{
					id: 1,
					title: 'Saham',
					content: {
						image: 'product-1.png',
						heading: `Nikmati mudahnya<br />investasi saham di MOST.`,
						description:
							'Investasi saham jadi aman dan nyaman berkat biaya jual beli yang terjangkau, fasilitas pinjaman, serta banyaknya pilihan media transaksi.',
						topTitle: 'Top Saham'
					}
				},
				{
					id: 2,
					title: 'Reksa Dana',
					content: {
						image: 'product-2.png',
						heading: `Pilih produk reksa dana terbaik<br />dari manajer investasi di MOST.`,
						description:
							'Kualitas produk reksa dana di MOST sudah dijamin oleh manajer investasi. Tentukan produk reksa dana yang paling sesuai dengan kebutuhan Anda saat ini.',
						topTitle: 'Top Reksa Dana'
					}
				},
				{
					id: 3,
					title: 'Syariah',
					content: {
						image: 'product-3.png',
						heading: `Kemudahan investasi di pasar<br />modal sesuai prinsip syariah.`,
						description:
							'Tersedia layanan transaksi saham, reksa dana, serta obligasi syariah bagi Anda yang tertarik berinvestasi di pasar modal sesuai prinsip -prinsip syariah.',
						topTitle: 'Top Saham Syariah'
					}
				},
				{
					id: 4,
					title: 'Obligasi',
					content: {
						image: 'product-4.png',
						heading: `Nikmati segala keuntungan<br />transaksi obligasi via MOST.`,
						description:
							'MOST menyediakan layanan transaksi Obligasi korporasi, pemerintah, konvensional dan syariah yang ada di pasar modal',
						topTitle: 'Penawaran Obligasi'
					}
				}
			],
			activeTab: 0
		}
	}
}
</script>

<style lang="scss" scoped></style>
