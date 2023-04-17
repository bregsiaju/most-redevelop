<template>
	<main class="site-main">
		<section class="header">
			<div class="container">
				<PageHeader>
					<template #header-left>
						<h1 class="text-reg">
							MOST hadir di<br /><b>berbagai platform.</b>
						</h1>
						<p>
							MOST tersedia dalam bentuk Mobile App, Desktop App, dan web
							browser demi kenyamanan serta kemudahan transaksi Anda.
						</p>
						<nuxt-link to="" class="btn--primary">UNDUH SEKARANG</nuxt-link>
					</template>
					<template #header-image>
						<img src="/assets/img/platform-laptop.png" alt="unduh di web" />
					</template>
				</PageHeader>
			</div>
		</section>

		<section class="platform relative">
			<h1 class="shadow">Platform</h1>
			<div class="container">
				<h1 class="text-reg mb-0">
					<b>Aplikasi MOST</b> disesuaikan<br />dengan kebutuhan Anda.
				</h1>
				<PlatformCarousel :content="platforms" />
			</div>
		</section>

		<LastSection :data="footer" />
	</main>
</template>

<script>
import PageHeader from '~/components/product/PageHeader.vue'
import PlatformCarousel from '~/components/carousel/PlatformCarousel.vue'
import LastSection from '~/components/LastSection.vue'

export default {
	components: {
		PageHeader,
		PlatformCarousel,
		LastSection
	},
	data() {
		return {
			platforms: [
				{
					no: 1,
					title: 'MOST Mobile',
					desc: 'Nikmati kemudahan bertransaksi via aplikasi mobile MOST dalam genggaman tangan. Tersedia di Google Play Store dan App Store.',
					image: 'platform-mobile.png'
				},
				{
					no: 2,
					title: 'MOST Desktop',
					desc: 'Nikmati kemudahan bertransaksi via aplikasi mobile MOST dalam genggaman tangan. Tersedia di Google Play Store dan App Store.',
					image: 'platform-mobile.png'
				}
			],
			footer: {
				title: 'Lihat Fitur Platform MOST Anda!',
				desc: 'Pelajari lebih lanjut dan lihat fitur unggulan dari MOST dan bandingkan',
				url: '/fitur',
				button: 'SELENGKAPNYA'
			}
		}
	}
}
</script>

<style lang="scss" scoped>
section.header {
	@media #{$large} {
		padding-top: 40px;
	}
}

section.platform {
	margin: 120px 0 64px;

	h1 {
		line-height: 1.2;
	}
	.shadow {
		position: absolute;
		top: -64px;
		right: 0px;
		opacity: 0.3;
		font-size: 150px;
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
}
</style>
