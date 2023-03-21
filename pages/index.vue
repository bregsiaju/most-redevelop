<template>
	<main class="site-main">
		<section>
			<homepageMainBanner :image="`banner-1.png`" />
		</section>
		<section class="benefit">
			<div class="container title text-center">
				Mengapa <strong>MOST</strong> adalah pilihan tepat?
			</div>
			<homepageCarouselBenefit />
		</section>
		<section class="product">
			<homepageProduct />
		</section>
		<section class="simulation">
			<div class="container title text-center">
				<strong>Simulasikan Investasi</strong> Anda
			</div>
			<homepageSimulation />
		</section>
		<section class="call-to-action">
			<div class="container">
				<div class="container title">
					<p>Bergabung Bersama <strong>MOST</strong> Sekarang</p>
				</div>
				<homepageCarouselCTA />
			</div>
		</section>
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
	padding: 100px 0 36px;
}

section.call-to-action {
	padding-top: 120px;
	padding-bottom: 90px;
	background: url('~static/assets/img/homepage/bg-cta.png');
	background-repeat: no-repeat;

	.title {
		display: flex;
		justify-content: flex-end;

		p {
			line-height: 1.4;

			@media #{$large} {
				max-width: 510px;
			}
		}
	}
}

@media (max-width: 770px) {
	.title {
		font-size: 30px;
	}
}

@media (max-width: 770px) {
	section.call-to-action {
		padding-top: 40px;
		background-size: 30%;
		background-position: left bottom;

		.title p {
			margin-bottom: 0;
		}
	}
}
</style>
