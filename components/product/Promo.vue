<template>
	<div class="relative">
		<div class="container">
			<h1 class="shadow">Promo</h1>
			<VueSlickCarousel v-bind="settings">
				<div
					v-for="(item, i) in content"
					:key="i"
					class="carousel-item-wrapper"
				>
					<div class="bzg v-center">
						<div class="bzg_c" data-col="m5, l5">
							<div class="responsive-media r-16-9">
								<img
									:src="`/assets/img/products/${item.image}`"
									alt="promo banner"
								/>
							</div>
						</div>
						<div class="bzg_c" data-col="m7, l6">
							<div class="navigation">
								<i class="icon-long-arrow-left mr-8"></i>
								<i class="icon-long-arrow-right"></i>
							</div>
							<h2 class="title f--semi">{{ item.title }}</h2>
							<p class="f-24 text-grey">{{ item.desc }}</p>
							<button class="btn--primary f-14">LIHAT DETAIL</button>
						</div>
					</div>
				</div>
			</VueSlickCarousel>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Promo',
	props: {
		content: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			settings: {
				responsive: [
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false
						}
					}
				]
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.navigation {
	font-size: 32px;

	i {
		&:hover {
			color: $primary !important;
			cursor: pointer;
		}
	}
}

.bzg {
	padding: 16px 0 48px;

	.bzg_c {
		padding-top: 8px;
		padding-bottom: 8px;
	}

	@media #{$large} {
		padding: 106px 0;

		.bzg_c:nth-child(2) {
			padding-left: 56px;
		}
	}
}

h2 {
	line-height: 1.3;
}

.shadow {
	position: absolute;
	right: 0px;
	top: 0px;
	font-size: 150px;
	color: #e1e1e1;
	opacity: 30%;
}

.carousel-item-wrapper {
	p {
		line-height: 1.3;
	}

	@media #{$large} {
		padding-left: 16px;
	}
}

@media #{$md} {
	.bzg_c {
		padding-top: 32px;
		padding-bottom: 16px;
	}

	.shadow {
		display: none;
	}
}

.container {
	/deep/ .slick-prev {
		top: 162px;
		left: 45.7%;

		&::before {
			color: transparent;
		}

		@media (max-width: 1200px) {
			top: 136px;
			left: 47%;
		}

		@media #{$md} {
			top: 47px;
			left: 43%;
		}
	}

	/deep/ .slick-next {
		top: 162px;
		right: 49%;

		&::before {
			color: transparent;
		}

		@media (max-width: 1200px) {
			top: 136px;
			right: 46%;
		}

		@media #{$md} {
			top: 47px;
			right: 47.5%;
		}
	}
}
</style>
