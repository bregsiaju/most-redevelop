<template>
	<main class="site-main">
		<div class="container">
			<StickyHelpers>
				<template #sticky-content>
					<ul class="list-nostyle">
						<li v-for="(category, i) in listCategory" :key="i">
							<nuxt-link :to="`/bantuan${category?.url}`">
								{{ category?.title }}
							</nuxt-link>
						</li>
					</ul>
				</template>
				<template #main-content>
					<ul class="breadcrumb f-16">
						<li><nuxt-link to="/bantuan">Bantuan</nuxt-link></li>
						<li>{{ activePage }}</li>
					</ul>
					<h2>{{ activePage }}</h2>
					<div class="question-list">
						<ul class="list-nostyle">
							<li v-for="(list, i) in listCategory[2].questions" :key="i">
								<nuxt-link to="">{{ list.title }}</nuxt-link>
							</li>
							<li v-for="(list, i) in listCategory[2].questions" :key="i">
								<nuxt-link to="">{{ list.title }}</nuxt-link>
							</li>
						</ul>
					</div>
				</template>
			</StickyHelpers>
		</div>
	</main>
</template>

<script>
import StickyHelpers from '~/components/StickyHelpers.vue'

export default {
	components: {
		StickyHelpers
	},
	data() {
		return {
			listCategory: [
				{
					title: 'Mulai Investasi',
					url: '/mulai-investasi'
				},
				{
					title: 'Akun & Rekening Efek',
					url: '/akun-dan-rekening-efek'
				},
				{
					title: 'Dokumen & Pajak',
					url: '/dokumen-dan-pajak',
					questions: [
						{
							title: 'Penarikan Dana',
							url: '',
							content: ''
						},
						{
							title: 'Klaim waris atau efek',
							url: '',
							content: ''
						},
						{
							title: 'Apakah Nasabah bisa melakukan transaksi margin ?',
							url: '',
							content: ''
						},
						{
							title: 'Pemindahan Saham dari sekuritas lain',
							url: '',
							content: ''
						},
						{
							title: 'Ketentuan umum bank transfer',
							url: '',
							content: ''
						}
					]
				},
				{
					title: 'Saham',
					url: '/saham'
				},
				{
					title: 'Reksa Dana',
					url: '/reksa-dana'
				},
				{
					title: 'Obligasi',
					url: '/obligasi'
				},
				{
					title: 'Syariah',
					url: '/syariah'
				}
			]
		}
	},
	computed: {
		activePage() {
			const activePage = this.$route.params.category
			const title = activePage.replace('-dan-', '-&-').replace(/-/g, ' ')
			return this.$toTitleCase(title)
		}
	}
}
</script>

<style lang="scss" scoped>
.sticky {
	a {
		border-left: 2px solid #d2d2d2;
		display: block;
		padding: 8px 16px;
		font-size: 20px;

		&:hover,
		&.nuxt-link-active {
			color: $primary;
			border-left-color: $primary;
		}
	}
}

.question-list {
	margin-top: 22px;

	li {
		a {
			display: block;
			font-size: 18px;
			margin-bottom: 18px;
		}
	}
}
</style>
