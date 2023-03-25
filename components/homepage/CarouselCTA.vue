<template>
	<div class="cta-carousel relative">
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
		<div class="nav-wrapper flex v-center f-space-between">
			<div class="navigation"></div>
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
				swipeToSlide: true,
				prevArrow: '.icon-long-arrow-left',
				nextArrow: '.icon-long-arrow-right'
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

@media (max-width: 576px) {
	.nav-wrapper {
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 36px;
	}
}

@media (max-width: 770px) {
	.text-benefit p {
		font-size: 36px;
	}
}
</style>

<style scoped>
.cta-carousel >>> .slick-prev {
	top: 252px;
	left: 0px;
}

.cta-carousel >>> .slick-next {
	top: 252px;
	left: 47px;
}

.cta-carousel >>> .slick-prev:hover::before,
.cta-carousel >>> .slick-next:hover::before {
	color: #faa61a !important;
}

@media (max-width: 576px) {
	.cta-carousel >>> .slick-prev {
		top: 100%;
		left: 40%;
	}

	.cta-carousel >>> .slick-next {
		top: 100%;
		left: 56%;
	}
}
</style>
