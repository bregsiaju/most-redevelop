<template>
	<main class="site-main">
		<LastSection :data="footer" />
	</main>
</template>

<script>
import LastSection from '~/components/LastSection.vue'

export default {
	components: {
		LastSection
	},
	data() {
		return {
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
