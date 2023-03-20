<template>
	<div class="cta-carousel">
		<VueSlickCarousel v-bind="settings">
			<div class="text-benefit">
				<p>
					Kemudahan <span class="text-primary-blue">Trading</span> Via Gadget
				</p>
			</div>
			<div class="text-benefit">
				<p>
					Akses <span class="text-primary-blue">Lengkap</span> Berbagai Riset
				</p>
			</div>
			<div class="text-benefit">
				<p><span class="text-primary-blue">Bebas</span> Biaya Training</p>
			</div>
		</VueSlickCarousel>
		<div class="flex v-center f-space-between">
			<div class="navigation">
				<i class="icon-long-arrow-left mr-8"></i>
				<i class="icon-long-arrow-right"></i>
			</div>
			<div>
				<button class="btn--primary mr-20">MULAI INVESTASI</button>
				<button class="btn--ghost-primary">CARA DAFTAR</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CarouselCTA',
	data() {
		return {
			settings: {
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				vertical: true,
				verticalSwiping: true,
				autoplay: true,
				swipeToSlide: true
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.cta-carousel > .slick-slider {
	padding-top: 30px;
	padding-bottom: 40px;
}
.text-benefit p {
	font-size: 80px;
	line-height: 1;
	color: #d2d2d2;
	text-align: center;
}

.navigation {
	font-size: 32px;

	i {
		&:hover {
			color: $primary !important;
			cursor: pointer;
		}
	}
}
</style>
