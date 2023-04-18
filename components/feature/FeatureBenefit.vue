<template>
	<div class="bzg v-center feature">
		<div class="bzg_c relative" data-col="m7, l6">
			<p class="f-24 mb-8 type">MOST {{ content.name }}</p>
			<h1 class="title text-reg" v-html="content.headline"></h1>
			<!-- carousel benefit -->
			<VueSlickCarousel v-bind="settings">
				<div
					v-for="(group, i) in splitBenefit"
					:key="i"
					class="carousel-item-wrapper"
				>
					<div
						v-for="(item, x) in group"
						:key="x"
						class="flex v-center f-gap-20"
					>
						<img :src="`/assets/img/feature/${item.icon}`" />
						<p class="f-24 mb-0">{{ item.text }}</p>
					</div>
				</div>
			</VueSlickCarousel>
			<div class="navigation">
				<i class="icon-long-arrow-left mr-8"></i>
				<i class="icon-long-arrow-right"></i>
			</div>
		</div>
		<div class="bzg_c" data-col="m5, l6">
			<div class="responsive-media r-square">
				<img
					:src="`/assets/img/${content.image}`"
					alt="device"
					class="--contain p-20"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		content: {
			type: Object,
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
							slidesToScroll: 1
						}
					}
				]
			}
		}
	},
	computed: {
		splitBenefit() {
			const result = this.content.benefit.reduce((sub, val, i) => {
				if (i % 2 === 0) {
					sub.push([val])
				} else {
					sub[sub.length - 1].push(val)
				}
				return sub
			}, [])

			return result
		}
	}
}
</script>

<style lang="scss" scoped>
.title {
	line-height: 1.3;
	margin-bottom: 40px;

	@media #{$large} {
		padding-right: 150px;
	}
}

.navigation {
	font-size: 32px;

	i {
		color: transparent;
	}
}

.carousel-item-wrapper {
	padding: 0 10px;

	img {
		width: 56px;
	}

	p {
		line-height: 1.3;
	}

	.flex {
		margin-bottom: 36px;
	}
}

@media #{$md} {
	p.type {
		font-size: 1.25em !important;
	}

	.title {
		font-size: 28px;
		margin-bottom: 24px;
	}

	.carousel-item-wrapper {
		p {
			font-size: 1.25em !important;
		}

		.flex {
			margin-bottom: 24px;
		}
	}
}

@media #{$sm} {
	.responsive-media.r-square {
		padding-bottom: 70%;
	}

	.navigation {
		font-size: 16px;
	}
}

.feature {
	/deep/ .slick-prev {
		top: 219px;
		left: 0px;

		&::before {
			color: $dark-grey;
		}

		&:hover::before {
			color: $primary;
		}

		@media (max-width: 1200px) {
			top: 250px;
		}

		@media #{$md} {
			top: 195px;
		}
	}

	/deep/ .slick-next {
		top: 219px;
		right: 0;
		left: 47px;

		&::before {
			color: $dark-grey;
		}

		&:hover::before {
			color: $primary;
		}

		@media (max-width: 1200px) {
			top: 250px;
		}

		@media #{$md} {
			top: 195px;
		}
	}
}
</style>
