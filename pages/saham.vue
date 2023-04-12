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
