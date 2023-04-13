<template>
	<div class="main-wrapper relative">
		<h1 class="shadow">Layanan</h1>
		<div class="container">
			<div class="flex v-center f-gap-18 title">
				<h1 class="text-reg mb-0"><b>Keuntungan</b> Bagi Anda!</h1>
				<nuxt-link to="/fitur">
					<ArrowCircle />
				</nuxt-link>
			</div>
			<div class="bzg">
				<div v-for="(item, i) in content" :key="i" class="bzg_c" data-col="m6">
					<div class="content-wrapper">
						<h3>{{ item.text1 }}</h3>
						<hr />
						<p>{{ item.text2 }}</p>
					</div>
				</div>
			</div>
			<p class="kamus">
				Buka
				<nuxt-link to="/istilah-investasi">Kamus Investasi</nuxt-link> untuk
				memahami istilah-istilah yang masih asing bagi Anda.
			</p>
		</div>
	</div>
</template>

<script>
import ArrowCircle from '../icons/ArrowCircle.vue'

export default {
	name: 'Service',
	components: { ArrowCircle },
	props: {
		content: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.main-wrapper {
	margin: 108px 0 64px;
}

.shadow {
	position: absolute;
	top: -107px;
	right: 0px;
	opacity: 0.3;
	font-size: 164px;
	color: #e1e1e1;
	line-height: 1;
	z-index: -1;

	@media #{$md} {
		top: -80px;
		font-size: 100px;
	}

	@media #{$sm} {
		font-size: 70px;
	}
}

.title {
	margin-bottom: 64px;

	h1 {
		line-height: 1.3;
	}
}

.bzg {
	.bzg_c {
		margin-bottom: 48px;

		@media #{$sm} {
			margin-bottom: 24px;
		}
	}
}

hr {
	border-top: 5px solid $primary-blue;
	width: 30%;
	margin-bottom: 24px;
}

.content-wrapper {
	p {
		font-size: 20px;
		color: #707070;
		line-height: 1.4;
	}

	h3 {
		margin-bottom: 24px;
	}
}

.kamus {
	font-size: 20px;

	a {
		color: $primary;
		text-decoration: underline;

		&:hover {
			color: $link_hover;
		}
	}

	@media #{$sm} {
		font-size: 16px;
	}
}

@media #{$large} {
	.content-wrapper {
		width: 65%;

		p {
			font-size: 24px;
		}
	}
}
</style>
