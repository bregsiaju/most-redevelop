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
