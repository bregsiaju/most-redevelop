<template>
	<div class="benefit">
		<VueSlickCarousel ref="carouselBenefit" v-bind="settings">
			<div v-for="benefit in benefits" :key="benefit.id" class="slick-item">
				<div class="benefit-item container">
					<div class="bzg">
						<div class="bzg_c relative pt-64" data-col="m6">
							<div class="navigation">
								<i class="icon-long-arrow-left mr-8" @click="prev"></i>
								<i class="icon-long-arrow-right" @click="next"></i>
							</div>
							<span class="number" :data-content="`${benefit.id}`"></span>
							<div class="flex f-gap-28 v-start">
								<img
									:src="`assets/img/homepage/${benefit.icon}`"
									width="46px"
								/>
								<div class="text-wrapper">
									<p class="mb-24">{{ benefit.heading }}</p>
									<p class="f-24 mb-24 font-grey">{{ benefit.desc }}</p>
									<nuxt-link to="">
										<button class="btn--primary">LIHAT SELENGKAPNYA</button>
									</nuxt-link>
								</div>
							</div>
						</div>
						<div class="bzg_c benefit-img" data-col="m6">
							<img :src="`assets/img/homepage/${benefit.image}`" alt="hp" />
						</div>
					</div>
				</div>
			</div>
		</VueSlickCarousel>
	</div>
</template>

<script>
export default {
	name: 'CarouselBenefit',
	data() {
		return {
			benefits: [
				{
					id: 1,
					icon: 'icon-shield.png',
					heading: 'Investasi Aman & Terpercaya',
					desc: 'MOST menjamin agar Anda dapat melakukan investasi dengan aman & nyaman.',
					image: 'benefit-1.png'
				},
				{
					id: 2,
					icon: 'icon-hp.png',
					heading: 'Cukup Satu Akun untuk Akses Lengkap',
					desc: 'Dapatkan keuntungan maksimal berinvestasi di pasar modal hanya dengan satu akun MOST.',
					image: 'benefit-2.png'
				},
				{
					id: 3,
					icon: 'icon-lamp.png',
					heading: 'Sarana Belajar Investasi, Gratis!',
					desc: 'Temukan caramu lebih mahir meraih profit bersama para MOST Advisors dan analis handal, lewat banyak pilihan media.',
					image: 'benefit-3.png'
				}
			],
			settings: {
				arrows: false
			}
		}
	},
	methods: {
		next() {
			this.$refs.carouselBenefit.next()
		},
		prev() {
			this.$refs.carouselBenefit.prev()
		}
	}
}
</script>

<style lang="scss" scoped>
@media #{$medium} {
	.benefit-item {
		padding: 44px 0;
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
.text-wrapper {
	max-width: 355px;

	p:first-child {
		font-size: 30px;
		font-weight: 600;
	}

	p {
		line-height: 1.3;
	}
}

.benefit-img {
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		height: 500px;
	}
}

.number:after {
	content: attr(data-content);
	position: absolute;
	top: -10%;
	left: 30%;
	font-size: 350px;
	line-height: 1;
	font-weight: 700;
	z-index: -1;
	background: linear-gradient(to top, #fff 10%, #eff2f6 70%);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
}

.bzg {
	margin-left: 0;

	.bzg_c {
		padding-left: 0;
	}
}

@media (max-width: 770px) {
	.benefit-img {
		padding-top: 50px;

		img {
			height: 250px;
		}
	}
}
</style>
