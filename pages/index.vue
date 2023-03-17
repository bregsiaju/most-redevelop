<template>
	<main class="site-main">
		<section>
			<homepageMainBanner :image="`banner-1.png`" />
		</section>
		<section class="benefit">
			<div class="title text-center">
				Mengapa <strong>MOST</strong> adalah pilihan tepat?
			</div>
			<homepageCarouselBenefit />
		</section>
		<section class="product">
			<homepageProduct />
		</section>
		<section class="simulation">
			<div class="title text-center">
				<strong>Simulasikan Investasi</strong> Anda
			</div>
			<homepageSimulation />
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
	min-height: 3000px;
}

.title {
	font-size: 45px;
	margin-bottom: 25px;
	line-height: 1;
	color: #3b3b3b;
}

section.benefit {
	padding: 60px 0;
}

section.simulation {
	padding: 100px 0;
}
</style>
