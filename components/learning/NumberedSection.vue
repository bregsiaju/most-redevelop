<template>
	<section class="section-numbered relative">
		<span class="number bg-primary-blue text-white">
			{{ '0' + content.id }}
		</span>
		<div class="container">
			<div class="bzg main">
				<div class="bzg_c desc" data-col="m5, l4">
					<h2>{{ content.title }}</h2>
					<p>{{ content.desc }}</p>
					<nuxt-link v-if="content.url" :to="content.url">
						<button class="btn--primary mb-16">LIHAT SELENGKAPNYA</button>
					</nuxt-link>
				</div>
				<div class="bzg_c" data-col="m7, l8">
					<div class="bzg">
						<div
							v-for="(item, i) in content.contents"
							:key="i"
							class="bzg_c"
							data-col="m6"
						>
							<learningCard :content="item" :card-type="content.cardType" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'NumberedSection',
	props: {
		content: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.section-numbered {
	.number {
		font-size: 36px;
		font-weight: bold;
		border-radius: 0 30px 0 0;
		padding: 20px 32px 0 0;
		line-height: 1;
		position: absolute;

		@media #{$medium} {
			padding: 52px 65px 0 0;
			font-size: 48px;
		}
	}

	.container {
		padding: 71px 0 50px 0px;
		background-image: linear-gradient(90deg, #f2f2f2, 40%, #fff 40%);
		background-position: 56px 0;

		@media #{$large} {
			padding: 71px 0 50px 100px;
			background-position: 120px 0;

			.bzg.main {
				margin-left: 24px;
			}
		}
	}

	.desc {
		h2 {
			font-size: 30px;
		}
		p {
			font-size: 24px;
			color: $grey;
		}
	}
}
</style>
