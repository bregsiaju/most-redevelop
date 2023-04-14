<template>
	<section class="relative">
		<div class="bg-full"></div>
		<div class="container">
			<div class="content-wrapper">
				<img
					v-if="data.logo"
					:src="`/assets/img/products/${data.logo}`"
					alt=""
					class="mb-12"
				/>
				<h1 class="title">{{ data.title }}</h1>
				<p class="text-grey">{{ data.desc }}</p>
				<nuxt-link :to="data.url" class="btn--primary">{{
					data.button
				}}</nuxt-link>
			</div>
		</div>
		<img src="~assets/img/bg-line-circle-dot.png" alt="bg" class="bg-image" />
	</section>
</template>

<script>
export default {
	name: 'LastSection',
	props: {
		data: {
			type: Object,
			default: () => ({
				title: 'Saham',
				desc: 'Seperti apakah cara kerja saham dan apa keuntungan serta risikonya? Pelajari semuanya lebih lanjut di sini.',
				url: '/belajar-investasi/mulai-investasi',
				button: 'BELAJAR SEKARANG'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.title {
	font-size: 40px;
	line-height: 1.2;
}

section {
	padding: 40px 0;

	.bg-full {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #f2f2f2;
		z-index: -2;
		top: 0;
	}
}

p {
	font-size: 20px;
}

.bg-image {
	position: absolute;
	right: 0;
	bottom: 0;
	height: 100%;
	z-index: -1;
}

.content-wrapper {
	width: 90%;
}

@media #{$medium} {
	.content-wrapper {
		width: 60%;
	}

	p {
		font-size: 28px;
	}

	.bg-image {
		height: 70%;
	}
}

@media #{$large} {
	.bg-image {
		height: 90%;
	}
}
</style>
