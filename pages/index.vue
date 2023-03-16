<template>
	<main class="site-main">
		<section>
			<!-- <VueSlickCarousel v-bind="settings"> -->
			<homepageMainBanner :image="`banner-1.png`">
				<template #banner-title>
					<strong>MOST:</strong> Aplikasi investasi terpercaya<br />untuk hidup
					lebih mapan.
				</template>
				<template #banner-decs>
					Jual beli saham, reksa dana, dan obligasi dalam<br />satu platform
					terintegrasi.
				</template>
			</homepageMainBanner>
			<!-- <homepageMainBanner :image="`banner-2.png`">
				<template #banner-title>
					Saatnya investasi berkelas,<br />saatnya
					<strong>Mandiri Sekuritas.</strong>
				</template>
				<template #banner-decs>
					Daftar dan unduh aplikasi MOST untuk menikmati<br />berbagai kemudahan
					dalam berinvestasi.
				</template>
			</homepageMainBanner> -->
			<!-- </VueSlickCarousel> -->
		</section>
		<div class="container"></div>
	</main>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
	data() {
		return {
			settings: {
				arrows: false
			}
		}
	},
	head() {
		return {
			...this.$SEOMeta({
				metaTitle: 'MOST: Aplikasi Investasi Terpercaya'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	min-height: 1000px;
}
</style>
