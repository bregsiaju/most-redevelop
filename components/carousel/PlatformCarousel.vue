<template>
	<VueSlickCarousel v-bind="settings" class="carousel">
		<div v-for="item in content" :key="item.no" class="carousel-item-wrapper">
			<div class="bzg v-center bzg--no-gutter">
				<div class="bzg_c relative pb-24" data-col="m7, l6">
					<div class="navigation">
						<i class="icon-long-arrow-left mr-8"></i>
						<i class="icon-long-arrow-right"></i>
					</div>
					<span class="number" :data-content="`${item.no}`"></span>
					<h2 class="title f--semi">{{ item.title }}</h2>
					<p class="f-24 text-grey">{{ item.desc }}</p>
					<!-- <button class="btn--primary f-14">LIHAT DETAIL</button> -->
					<div class="bzg bzg--no-gutter link-wrapper">
						<div class="bzg_c" data-col="s5, m4">
							<nuxt-link to="">
								<img src="/assets/img/play-store.png" />
							</nuxt-link>
						</div>
						<div class="bzg_c" data-col="s5, m4">
							<nuxt-link to="">
								<img src="/assets/img/app-store.png" />
							</nuxt-link>
						</div>
					</div>
				</div>
				<div class="bzg_c" data-col="m5, l6">
					<div class="responsive-media r-square">
						<img
							:src="`/assets/img/${item.image}`"
							alt="device"
							class="--contain p-20"
						/>
					</div>
				</div>
			</div>
		</div>
	</VueSlickCarousel>
</template>

<script>
export default {
	name: 'PlatformCarousel',
	props: {
		content: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			settings: {
				arrows: true,
				responsive: [
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: true
						}
					}
				]
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.carousel-item-wrapper {
	padding-top: 28px;

	@media #{$md} {
		padding-top: 40px;
	}
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

.number:after {
	content: attr(data-content);
	position: absolute;
	top: -50%;
	left: 30%;
	font-size: 350px;
	line-height: 1;
	font-weight: 700;
	z-index: -1;
	background: linear-gradient(to top, #fff 10%, #eff2f6 70%);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;

	@media #{$md} {
		top: -20%;
		left: 35%;
		font-size: 250px;
	}
}

@media #{$md} {
	img.p-20 {
		padding: 0 !important;
	}
}

.carousel {
	/deep/ .slick-prev {
		top: 210px;
		left: 0px;

		&::before {
			color: transparent;
		}

		@media (max-width: 1200px) {
			top: 134px;
			left: 0px;
		}

		@media #{$md} {
			top: 62px;
			left: 0px;
		}
	}

	/deep/ .slick-next {
		top: 210px;
		right: 0;
		left: 47px;

		&::before {
			color: transparent;
		}

		@media (max-width: 1200px) {
			top: 134px;
			right: 0;
			left: 47px;
		}

		@media #{$md} {
			top: 62px;
			right: 0;
			left: 47px;
		}
	}
}
</style>
