<template>
	<main class="site-main">
		<section class="header">
			<div class="container">
				<h1 class="text-reg">Hore! <b>Pencarianmu</b> ditemukan</h1>
				<h5 class="text-reg text-grey">Yuk, cek 3 hasil pencarian ini</h5>
			</div>
		</section>

		<section class="search-result">
			<div class="container">
				<SearchResult :content="results" />
			</div>
		</section>
	</main>
</template>

<script>
import SearchResult from '~/components/search/SearchResult.vue'

export default {
	components: {
		SearchResult
	},
	data() {
		return {
			results: [
				{
					category: 'Tips & Trik Investasi',
					data: [
						{
							image: 'result-1.png',
							title: '5 Gaya Hidup New Normal Di Masa Pandemi',
							description:
								'Seluruh dunia berharap pandemi Covid-19 akan segera berlalu. Selain mendukung pembatasan sosial berskala besar (PSBB), masyarakat juga harus bersiap menyesuaikan diri dengan kondisi normal baru (new normal) di saat ini sampai setelah pandemi. Lalu, apakah yang disebut gaya hidup new normal?'
						},
						{
							image: 'result-2.png',
							title: '5 Gaya Hidup New Normal Di Masa Pandemi',
							description:
								'Seluruh dunia berharap pandemi Covid-19 akan segera berlalu. Selain mendukung pembatasan sosial berskala besar (PSBB), masyarakat juga harus bersiap menyesuaikan diri dengan kondisi normal baru (new normal) di saat ini sampai setelah pandemi. Lalu, apakah yang disebut gaya hidup new normal?'
						}
					]
				},
				{
					category: 'Belajar Investasi',
					data: [
						{
							image: 'result-3.png',
							title: '5 Gaya Hidup New Normal Di Masa Pandemi',
							description:
								'Seluruh dunia berharap pandemi Covid-19 akan segera berlalu. Selain mendukung pembatasan sosial berskala besar (PSBB), masyarakat juga harus bersiap menyesuaikan diri dengan kondisi normal baru (new normal) di saat ini sampai setelah pandemi. Lalu, apakah yang disebut gaya hidup new normal?'
						}
					]
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
section.header {
	padding: 36px 0 28px;
}

section.search-result {
	background-color: #f2f2f2;
	padding: 28px 0;
}
</style>
