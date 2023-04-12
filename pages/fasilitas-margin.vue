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
				title: 'Belajar Fasilitas Marjin',
				desc: 'Pahami lebih lanjut apa itu fasilitas marjin pada ringkasan berikut ini.',
				url: '/belajar-investasi/fasilitas-margin',
				button: 'BELAJAR SEKARANG'
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>
