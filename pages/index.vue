<template>
	<main class="site-main">
		<section>
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
		</section>
		<section class="benefit">
			<div class="title text-center">
				Mengapa <strong>MOST</strong> adalah pilihan tepat?
			</div>
			<homepageCarouselBenefit />
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

.title {
	font-size: 45px;
	margin-bottom: 25px;
	line-height: 1.3;
	color: #3b3b3b;
}

section.benefit {
	padding: 60px 0;
}
</style>
